import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

const RegisterForm = () => {
  const { data: session } = useSession();
  const registerForm = useRef(null!);
  const [error, setError] = useState<string | null>();
  //const [createInfo, setCreateInfo] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  if (session) {
    router.push('/');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);
    const form = new FormData(registerForm.current);
    const payload = {
      email: form.get('email'),
      name: form.get('fullname'),
      password: form.get('password'),
      position: form.get('position')
    };

    if (payload.password !== form.get('confirmpassword')) {
      setError('Given passwords not match');
      setFormProcessing(false);
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      //setCreateInfo('Account is created. Now you can login');
      setFormProcessing(false);
      await signIn('credentials', {
        redirect: false,
        email: form.get('email'),
        password: form.get('password')
      });
      router.push('/community');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }
  };

  //styles
  const formField = 'flex flex-col mb-2';
  const formLabel = 'py-1';
  const formInput =
    'h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none';
  const formButton =
    'w-full h-10 border-none font-bold text-white bg-blue rounded-md hover:bg-lightblue ease-in duration-300';

  return (
    <motion.div
      className="w-full max-w-[450px] bg-primary rounded-md shadow-sm h-full p-4"
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      initial={{ opacity: 0, scale: 0, translateY: '60%' }}
      exit={{ opacity: 0, scale: 0, translateY: '60%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <div className="text-24 pb-2 font-semibold">Create your new developer account</div>
      <form action="#" onSubmit={handleSubmit} ref={registerForm}>
        {error && (
          <div className="flex flex-row justify-center items-center w-full h-10 border-none bg-red-500 text-white rounded-sm">
            {error}
          </div>
        )}
        <div className={formField}>
          <label htmlFor="fullname" className={formLabel}>
            Full name
          </label>
          <input
            className={formInput}
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            required
          />
        </div>
        <div className={formField}>
          <label htmlFor="email" className={formLabel}>
            Email
          </label>
          <input
            className={formInput}
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={formField}>
          <label htmlFor="password" className={formLabel}>
            Password
          </label>
          <input
            className={formInput}
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={formField}>
          <label htmlFor="confirmpassword" className={formLabel}>
            Confirm Password
          </label>
          <input
            className={formInput}
            type="password"
            name="confirmpassword"
            placeholder="Repeat your password"
            required
          />
        </div>
        <div className={formField}>
          <label htmlFor="position" className={formLabel}>
            Position
          </label>
          <select className={formInput} name="position">
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>
        <button type="submit" className={formButton}>
          Create account
        </button>
      </form>
    </motion.div>
  );
};

export default RegisterForm;

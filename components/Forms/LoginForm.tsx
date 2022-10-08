import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const { data: session } = useSession();
  const loginForm = useRef(null!);
  const [error, setError] = useState<string | null>();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  if (session) {
    router.push('/community');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);
    const form = new FormData(loginForm.current);
    console.log(form.get('email'));
    const response = await signIn('credentials', {
      redirect: false,
      email: form.get('email'),
      password: form.get('password')
    });
    console.log({ response });

    if (response?.ok) {
      router.push('/community');
    } else {
      setError('Not authorized. Try again.');
      setFormProcessing(false);
    }
  };
  return (
    <motion.div
      className="w-full max-w-[450px] bg-primary rounded-md shadow-sm h-full p-4 m-auto"
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      initial={{ opacity: 0, scale: 0, translateY: 180 }}
      exit={{ opacity: 0, scale: 0, translateY: 180 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <form onSubmit={handleSubmit} ref={loginForm}>
        <div className="pb-2 font-semibold text-24">Login to your account</div>
        {error && (
          <div className="flex flex-row items-center justify-center w-full h-10 text-white bg-red-500 border-none rounded-sm">
            {error}
          </div>
        )}
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="py-1">
            Email
          </label>
          <input
            className="w-full h-10 px-2 bg-transparent border rounded-md outline-none border-secondary"
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            className="w-full h-10 px-2 bg-transparent border rounded-md outline-none border-secondary"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full h-10 font-bold text-white duration-300 ease-in border-none rounded-md bg-blue hover:bg-lightblue"
          disabled={formProcessing}>
          {formProcessing ? 'Checking...' : 'Login'}
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;

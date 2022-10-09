import React, { useState, useRef } from 'react';
//import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { uploadImage } from 'utils/uploadImage';
import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';

// eslint-disable-next-line prettier/prettier
const skillsArray = ["html", "css", "sass", "react", "javascript", "typescript", "tailwind", "node", "next", "angular", "csharp", "cplus", "php", "drupal", "java", "python", "postgres", "mongo", "wordpress", "net"]
//styles
const formField = 'flex flex-col mb-2';
const formLabel = 'py-1';
const formInput = 'h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none';
const formButton =
  'w-full h-10 border-none font-bold text-white bg-blue rounded-md hover:bg-lightblue ease-in duration-300';

const ProjectForm = () => {
  //const { data: session } = useSession();
  const router = useRouter();
  const projectForm = useRef(null);
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [checkedSkills, setCheckedSkills] = useState([]);

  const handleImagePreview = (e) => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    setImagePreview(url);
  };

  const checkSkill = (newSkill) => {
    const findSkills = checkedSkills.find((skill) => skill === newSkill);
    if (findSkills) {
      const filterSkills = checkedSkills.filter((skill) => skill !== findSkills);
      setCheckedSkills(filterSkills);
    } else {
      setCheckedSkills((prev) => [...prev, newSkill]);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);
    const form = new FormData(projectForm.current);
    const author = {
      id: '1',
      name: 'Arek Cichocki',
      imageUrl: ''
    };
    const payload = {
      author,
      employees: [],
      title: form.get('title'),
      category: form.get('category'),
      logo: imagePreview,
      link: form.get('link'),
      description: form.get('description'),
      data: '10.10.10',
      skills: [checkedSkills],
      likes: []
    };
    console.log('Payload project', payload);

    if (form.get('logo').name !== '') {
      const picture = form.get('logo');
      const file = await uploadImage(picture);
      payload.logo = file.secure_url;
    }

    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('res', response);
    if (response.ok) {
      setFormProcessing(false);
      router.push('/projects');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }
  }

  // if (loading) {
  //   return <div className="form">Loading...</div>;
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[750px] bg-primary rounded-md shadow-sm h-full p-4"
      ref={projectForm}>
      <div className="pb-2 font-semibold text-24">Add new project</div>
      {error && <div className="form__error">{error}</div>}
      <div className="form__image">
        <img src={imagePreview} alt="" />
      </div>
      <div className={formField}>
        <label htmlFor="logo" className={formLabel}>
          Logo
        </label>
        <input
          className="form__upload"
          type="file"
          name="logo"
          id="logo"
          onChange={(e) => handleImagePreview(e)}
        />
      </div>
      <div className={formField}>
        <label htmlFor="title" className={formLabel}>
          Title
        </label>
        <input
          className={formInput}
          type="text"
          name="title"
          placeholder="Enter your project name"
          required
        />
      </div>
      <div className={formField}>
        <label htmlFor="category" className={formLabel}>
          Category
        </label>
        <input
          className={formInput}
          type="text"
          name="category"
          placeholder="Enter your category name"
          required
        />
      </div>
      <div className={formField}>
        <label htmlFor="link" className={formLabel}>
          Link
        </label>
        <input
          className={formInput}
          type="text"
          name="link"
          placeholder="Link to your project"
          required
        />
      </div>
      <div className={formField}>
        <label htmlFor="description" className={formLabel}>
          Description
        </label>
        <textarea
          className="form__textarea"
          name="description"
          placeholder="Write a couple words about this project"
        />
      </div>
      <div className={formField}>
        <label htmlFor="technology" className={formLabel}>
          Technology
        </label>
        <div className="skillstags" style={{ marginBottom: '16px' }}>
          {skillsArray.map((skill, i) => (
            <button
              type="button"
              key={i}
              className={`skillstags__button ${
                checkedSkills.find((item) => item === skill) ? 'active' : ''
              }`}
              onClick={() => checkSkill(skill)}>
              <div>
                <SkillsIconSwitcher
                  name={skill}
                  className={`icon-large ${
                    checkedSkills.find((item) => item === skill) ? 'primary-white' : 'primary-blue'
                  }`}
                />
              </div>
              <span>{skill}</span>
            </button>
          ))}
        </div>
      </div>
      <button type="submit" className={formButton}>
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;

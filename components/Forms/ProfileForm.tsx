import { useRef, useState, useEffect } from 'react';
// import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
// import { uploadImage } from 'services/uploadImage';
// eslint-disable-next-line prettier/prettier

import { DribbbleIcon, FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon, WebsiteIcon } from "components/Icons/SocialIcons";
import FlagIconSwitcher from "components/IconsSwitcher/FlagIconSwitcher";
import SkillsIconSwitcher from "components/IconsSwitcher/SkillsIconSwitcher";

const langsArray = ['pl', 'en', 'ger', 'fr', 'ua', 'it'];
// eslint-disable-next-line prettier/prettier
const skillsArray = ["html", "css", "sass", "react", "javascript", "typescript", "tailwind", "node", "next", "angular", "csharp", "cplus", "php", "drupal", "java", "python", "postgres", "mongo", "wordpress", "net"]

const ProfileForm = ({ name, email, imageUrl, position, languages, skills, about, socials }) => {
//   const [session, loading] = useSession();
  const router = useRouter();
  const profileForm = useRef();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [checkedLangs, setCheckedLangs] = useState([]);
  const [checkedSkills, setCheckedSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    website: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    github: '',
    dribbble: ''
  });
  const [education, setEducation] = useState([]);
  const [experience, setExpereience] = useState([]);

//   if (!session && !loading) {
//     router.push('/');
//   }

  useEffect(() => {
    if (languages) setCheckedLangs(languages);
    if (skills) setCheckedSkills(skills);
    if (imageUrl) setImagePreview(imageUrl);
  }, [languages]);

  //filter social links by find to get link to every user social then possible change in useState
  const filterSocial = (name) => {
    const findEl = socials.find((social) => social.name === name);
    if (findEl) {
      return findEl.link;
    } else {
      return '';
    }
  };

  useEffect(() => {
    if (socials) {
      setSocialLinks({
        website: filterSocial('website'),
        facebook: filterSocial('facebook'),
        linkedin: filterSocial('linkedin'),
        twitter: filterSocial('twitter'),
        github: filterSocial('github'),
        dribbble: filterSocial('dribbble')
      });
    }
  }, [socials]);

  const checkLang = (item) => {
    const findLang = checkedLangs.find((lang) => lang === item);
    if (findLang) {
      const filterLangs = checkedLangs.filter((lang) => lang !== findLang);
      setCheckedLangs(filterLangs);
    } else {
      setCheckedLangs((prev) => [...prev, item]);
    }
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

  const changeSocialValue = (e) => {
    setSocialLinks({
      ...socialLinks,
      [e.target.name]: e.target.value
    });
  };

  const handleImagePreview = (e) => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    setImagePreview(url);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);
    const form = new FormData(profileForm.current);
    const socialPayload = [
      { name: 'website', link: socialLinks.website },
      { name: 'facebook', link: socialLinks.facebook },
      { name: 'linkedin', link: socialLinks.linkedin },
      { name: 'twitter', link: socialLinks.twitter },
      { name: 'github', link: socialLinks.github },
      { name: 'dribbble', link: socialLinks.dribbble }
    ];
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      imageUrl: imagePreview,
      position: form.get('position'),
      languages: checkedLangs,
      skills: checkedSkills,
      socials: socialPayload,
      about: form.get('about')
    };

    if (form.get('imageUrl').name !== '') {
      const picture = form.get('imageUrl');
      const file = await uploadImage(picture);
      payload.imageUrl = file.secure_url;
    }

    const response = await fetch(`/api/users?id=${session.user.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      setFormProcessing(false);
      router.push('/profile');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }
  }

//   if (loading) {
//     return <div className="form">Loading...</div>;
//   }

const addExperience = {
}
const addEducation = {

}

  return (
    <div className="w-[560px] mx-auto">
      <div className="form__header"> <span className='text-3xl font-bold my-2'>
        
      Edit your profile
        
        </span>  </div>
      <form onSubmit={handleSubmit} ref={profileForm}>
        {error && <div className="form__error">{error}</div>}
        <div className="form__image">
          <img src={imagePreview} alt="" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="imageUrl" className="py-1">
            Image
          </label>
          <input
            className="form__upload color-blue"
            type="file"
            name="imageUrl"
            id="imageUrl"
            onChange={(e) => handleImagePreview(e)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="py-1">
            Full name
          </label>
          <input
            className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
            type="text"
            name="name"
            placeholder="Enter your fullname"
            defaultValue={name}
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="py-1">
            Email
          </label>
          <input
            className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
            type="text"
            name="email"
            placeholder="Enter your email"
            defaultValue={email}
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="position" className="py-1">
            Position
          </label>
          <select className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none" name="position" defaultValue={position}>
            <option value={position}>{position}</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="languages" className="py-1">
            Languages
          </label>
          <div className="flex mb-2">
            {langsArray.map((lang, i) => (
              <button
                type="button"
                key={i}
                className={`h-10 border-none mx-1 p-2 ${
                  checkedLangs.find((item) => item === lang) ? 'bg-blue' : ''
                }`}
                onClick={() => checkLang(lang)}>
                <FlagIconSwitcher country={lang} className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="skills" className="py-1">
            Skills
          </label>
          <div className="skillstags flex justify-start items-center max-w-full p-1 overflow-x-scroll color-blue" style={{ marginBottom: '16px' }}>
            {skillsArray.map((skill, i) => (
              <button
                type="button"
                key={i}
                className={`skillstags__button flex flex-col items-center p-2 border-none ${
                  checkedSkills.find((item) => item === skill) ? 'active bg-blue color-white' : ''
                }`}
                onClick={() => checkSkill(skill)}>
                <div>
                  <SkillsIconSwitcher
                    name={skill}
                    className={`w-8 h-8 text-lightblue ${
                      checkedSkills.find((item) => item === skill)
                        ? 'primary-white'
                        : 'primary-blue'
                    }`}
                  />
                </div>
                <span>{skill}</span>
              </button>
            ))}
          </div>
        </div>


        {education.length > 0 ? education.map(edu => {
            return(
                <><div className="flex flex-col mb-2">
          <label htmlFor="about" className="py-1">
            About
          </label>
          <textarea
            className="form__textarea"
            name="about"
            placeholder="Write a couple of sentence about you"
            defaultValue={about}
          />
        </div>
        <div className="flex flex-col mb-2 experience" >
            <div className='flex justify-between '>
          <label htmlFor="experience" className="py-1">
            Experience
          </label>
          <button className='h-[30px] w-[30px] rounded-full bg-cyan-600  border-solid border-1 pb-3 hover:bg-lightblue ease-in duration-300' type="button" onClick={addExperience}>
            <span className='text-2xl pb-3 leading-[1.7rem]'>+</span></button>
          </div>
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_date"
            placeholder="Write experience date"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_company"
            placeholder="Write your company name"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_position"
            placeholder="Write your position"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_lvl"
            placeholder="Write your experience level"
            defaultValue={about}
          />
        </div></>
            )
        }) : <><div className="flex flex-col mb-2">
          <label htmlFor="about" className="py-1">
            About
          </label>
          <textarea
            className="form__textarea"
            name="about"
            placeholder="Write a couple of sentence about you"
            defaultValue={about}
          />
        </div>
        <div className="flex flex-col mb-2 experience" >
            <div className='flex justify-between '>
          <label htmlFor="experience" className="py-1">
            Experience
          </label>
          <button className='h-[30px] w-[30px] rounded-full bg-cyan-600  border-solid border-1 pb-3 hover:bg-lightblue ease-in duration-300' type="button" onClick={addExperience}>
            <span className='text-2xl pb-3 leading-[1.7rem]'>+</span></button>
          </div>
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_date"
            placeholder="Write experience date"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_company"
            placeholder="Write your company name"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_position"
            placeholder="Write your position"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="experience_lvl"
            placeholder="Write your experience level"
            defaultValue={about}
          />
        </div></>}
        



        <div className="flex flex-col mb-2">
        <div className='flex justify-between education'>
          <label htmlFor="education" className="py-1">
            Education
          </label>
          <button className='h-[30px] w-[30px] rounded-full bg-cyan-600  border-solid border-1 pb-3 hover:bg-lightblue ease-in duration-300' type="button" onClick={addEducation}>
            <span className='text-2xl pb-3 leading-[1.7rem]'>+</span></button>
            </div>
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="education_date"
            placeholder="Write education date"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="education_university"
            placeholder="Write University name"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="education_department"
            placeholder="Write Department name"
            defaultValue={about}
          />
          <input
            className="h-10 w-full px-2 my-1 bg-transparent border border-secondary rounded-md outline-none"
            name="education_field"
            placeholder="Write education field name"
            defaultValue={about}
          />
        </div>













        <div className="flex flex-col mb-2">
          <label htmlFor="about" className="py-1">
            Socials
          </label>
          <div className="flex flex-row mb-2">
            <WebsiteIcon className="w-8 h-8 text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="website"
              placeholder="Your website link "
              value={socialLinks.website}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-row mb-2">
            <FacebookIcon className="w-8 h-8 text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="facebook"
              placeholder="Facebook link"
              value={socialLinks.facebook}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-row mb-2">
            <LinkedinIcon className="w-8 h-8  text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="linkedin"
              placeholder="Linkedin link"
              value={socialLinks.linkedin}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-row mb-2">
            <TwitterIcon className="w-8 h-8 text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="twitter"
              placeholder="Twitter link"
              value={socialLinks.twitter}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-row mb-2">
            <GithubIcon className="w-8 h-8 text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="github"
              placeholder="Github link"
              value={socialLinks.github}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-row mb-2">
            <DribbbleIcon className="icon-small w-8 h-8 text-lightblue" />
            <input
              className="h-10 w-full px-2 mx-5 bg-transparent border border-secondary rounded-md outline-none"
              name="dribbble"
              placeholder="Dribbble link"
              value={socialLinks.dribbble}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
        </div>
        <button type="submit" className="w-full h-10 border-none font-bold text-white bg-blue rounded-md hover:bg-lightblue ease-in duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
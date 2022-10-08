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
            className="form__upload"
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
          <select className="form__selector" name="position" defaultValue={position}>
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
          <div className="form__row">
            {langsArray.map((lang, i) => (
              <button
                type="button"
                key={i}
                className={`w-full h-10 border-none font-bold text-white bg-blue rounded-md hover:bg-lightblue ease-in duration-300 ${
                  checkedLangs.find((item) => item === lang) ? 'checked' : ''
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
                    className={`h5 ${
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
        <div className="flex flex-col mb-2">
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
        <div className="flex flex-col mb-2">
          <label htmlFor="about" className="py-1">
            Socials
          </label>
          <div className="flex flex-col mb-2">
            <WebsiteIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
              name="website"
              placeholder="Your website link"
              value={socialLinks.website}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <FacebookIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
              name="facebook"
              placeholder="Facebook link"
              value={socialLinks.facebook}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <LinkedinIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
              name="linkedin"
              placeholder="Linkedin link"
              value={socialLinks.linkedin}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <TwitterIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
              name="twitter"
              placeholder="Twitter link"
              value={socialLinks.twitter}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <GithubIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
              name="github"
              placeholder="Github link"
              value={socialLinks.github}
              onChange={(e) => changeSocialValue(e)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <DribbbleIcon className="icon-small primary-blue" />
            <input
              className="h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none"
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
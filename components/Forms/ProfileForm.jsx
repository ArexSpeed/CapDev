import { useRef, useState, useEffect } from 'react';
//import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { uploadImage } from 'utils/uploadImage';
// eslint-disable-next-line prettier/prettier
import { DribbbleIcon, FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon, WebsiteIcon } from 'components/Icons/SocialIcons';
import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';
import FlagIconSwitcher from 'components/IconsSwitcher/FlagIconSwitcher';

const langsArray = ['pl', 'en', 'ger', 'fr', 'ua', 'it'];
// eslint-disable-next-line prettier/prettier
const skillsArray = ["html", "css", "sass", "react", "javascript", "typescript", "tailwind", "node", "next", "angular", "csharp", "cplus", "php", "drupal", "java", "python", "postgres", "mongo", "wordpress", "net"]

const formField = 'flex flex-col mb-2';
const formLabel = 'py-1';
const formInput = 'h-10 w-full px-2 bg-transparent border border-secondary rounded-md outline-none';
const formButton =
  'w-full h-10 border-none font-bold text-white bg-blue rounded-md hover:bg-lightblue ease-in duration-300';
const formTextarea =
  'h-20 w-full px-2 bg-transparent border border-secondary rounded-md outline-none';

// eslint-disable-next-line prettier/prettier
const ProfileForm = ({ userId, name, email, imageUrl, position, languages, skills, about, socials }) => {
  //const [session, loading] = useSession();
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

  // if (!session && !loading) {
  //   router.push('/');
  // }

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

    const response = await fetch(`/api/users?id=${userId}`, {
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

  // if (loading) {
  //   return <div className="form">Loading...</div>;
  // }

  return (
    <form
      onSubmit={handleSubmit}
      ref={profileForm}
      className="w-full max-w-[750px] bg-primary rounded-md shadow-sm h-full p-4">
      <div className="pb-2 font-semibold text-24">Edit your profile</div>
      {error && <div className="form__error">{error}</div>}
      <div className="form__image">
        <img src={imagePreview} alt="" />
      </div>
      <div className={formField}>
        <label htmlFor="imageUrl" className={formLabel}>
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
      <div className={formField}>
        <label htmlFor="name" className={formLabel}>
          Full name
        </label>
        <input
          className={formInput}
          type="text"
          name="name"
          placeholder="Enter your fullname"
          defaultValue={name}
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
          defaultValue={email}
          required
        />
      </div>
      <div className={formField}>
        <label htmlFor="position" className={formLabel}>
          Position
        </label>
        <select className={formInput} name="position" defaultValue={position}>
          <option value={position}>{position}</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
      </div>
      <div className={formField}>
        <label htmlFor="languages" className={formLabel}>
          Languages
        </label>
        <div className="flex flex-row">
          {langsArray.map((lang, i) => (
            <button
              type="button"
              key={i}
              className={`flex justify-center items-center w-8 h-8 rounded-sm mr-2 ${
                checkedLangs.find((item) => item === lang) ? 'bg-green' : ''
              }`}
              onClick={() => checkLang(lang)}>
              <FlagIconSwitcher country={lang} className="w-6 h-6" />
            </button>
          ))}
        </div>
      </div>
      <div className={formField}>
        <label htmlFor="skills" className={formLabel}>
          Skills
        </label>
        <div className="" style={{ marginBottom: '16px' }}>
          {skillsArray.map((skill, i) => (
            <button
              type="button"
              key={i}
              className={`p-2 rounded-md mx-1 ${
                checkedSkills.find((item) => item === skill) ? 'bg-blue' : ''
              }`}
              onClick={() => checkSkill(skill)}>
              <div>
                <SkillsIconSwitcher
                  name={skill}
                  className={`w-6 h-6 ${
                    checkedSkills.find((item) => item === skill) ? 'text-white' : 'text-blue'
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className={formField}>
        <label htmlFor="about" className={formLabel}>
          About
        </label>
        <textarea
          className={formTextarea}
          name="about"
          placeholder="Write a couple of sentence about you"
          defaultValue={about}
        />
      </div>
      <div className={formField}>
        <label htmlFor="about" className={formLabel}>
          Socials
        </label>
        <div className="flex flex-row items-center justify-center w-full">
          <WebsiteIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="website"
            placeholder="Your website link"
            value={socialLinks.website}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <FacebookIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="facebook"
            placeholder="Facebook link"
            value={socialLinks.facebook}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <LinkedinIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="linkedin"
            placeholder="Linkedin link"
            value={socialLinks.linkedin}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <TwitterIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="twitter"
            placeholder="Twitter link"
            value={socialLinks.twitter}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <GithubIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="github"
            placeholder="Github link"
            value={socialLinks.github}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <DribbbleIcon className="w-4 h-6 mr-2 text-blue" />
          <input
            className={formInput}
            name="dribbble"
            placeholder="Dribbble link"
            value={socialLinks.dribbble}
            onChange={(e) => changeSocialValue(e)}
          />
        </div>
      </div>
      <button type="submit" className={formButton}>
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

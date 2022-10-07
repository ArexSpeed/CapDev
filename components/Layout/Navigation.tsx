/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from 'react';
// import { useSession } from 'next-auth/client';
import Link from 'next/link';
// import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
// eslint-disable-next-line prettier/prettier
import {
  BlogIcon,
  CommunityIcon,
  EventIcon,
  HomeIcon,
  LogoutIcon,
  ProfileIcon,
  ProjectIcon,
  QuizIcon,
  SunIcon,
  MoonIcon
} from '../Icons/FontIcons';

export const Navigation = () => {
  // const [session] = useSession();
  const router = useRouter();
  const toggleThemeRef = useRef();

  // const toggleTheme = () => {
  //   toggleThemeRef.current.checked
  //     ? document.documentElement.setAttribute('data-theme', 'dark')
  //     : document.documentElement.setAttribute('data-theme', '');
  // };

  // useEffect(() => {
  //   if (currentTheme) {
  //     document.documentElement.setAttribute('data-theme', currentTheme);
  //     if (currentTheme === 'dark') {
  //       toggleThemeRef.current.checked = true;
  //     }
  //   }
  // }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/" passHref>
            <a className={router.pathname === '/' ? 'nav__link active' : 'nav__link'}>
              <HomeIcon className="icon-medium secondary-blue" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/community" passHref>
            <a className={router.pathname === '/community' ? 'nav__link active' : 'nav__link'}>
              <CommunityIcon className="icon-medium secondary-blue" />
              <span>Community</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/blog" passHref>
            <a className={router.pathname === '/blog' ? 'nav__link active' : 'nav__link'}>
              <BlogIcon className="icon-medium secondary-blue" />
              <span>Blog</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/events" passHref>
            <a className={router.pathname === '/events' ? 'nav__link active' : 'nav__link'}>
              <EventIcon className="icon-medium secondary-blue" />
              <span>Events</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/projects" passHref>
            <a className={router.pathname === '/projects' ? 'nav__link active' : 'nav__link'}>
              <ProjectIcon className="icon-medium secondary-blue" />
              <span>Projects</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/quiz" passHref>
            <a className={router.pathname === '/quiz' ? 'nav__link active' : 'nav__link'}>
              <QuizIcon className="icon-medium secondary-blue" />
              <span>Quiz</span>
            </a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/profile" passHref>
            <a className={router.pathname === '/profile' ? 'nav__link active' : 'nav__link'}>
              <ProfileIcon className="icon-medium secondary-blue" />
              <span>Profile</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__item">
          <SunIcon className="icon-medium secondary-blue nav__switch-icon" />
          <label className="nav__switch">
            <input
              type="checkbox"
              // ref={toggleThemeRef} onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
          <MoonIcon className="icon-medium secondary-blue nav__switch-icon" />
        </li>
        {/* {session && ( */}
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          className="nav__item"
          // onClick={() =>
          //   signOut({
          //     callbackUrl: `/`
          //   })
          // }
        >
          <Link href="/" passHref>
            <a className="nav__link">
              <LogoutIcon className="icon-medium secondary-blue" />
              <span>Logout</span>
            </a>
          </Link>
        </li>
        {/* )} */}
      </ul>
    </nav>
  );
};

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from 'react';
// import { useSession } from 'next-auth/client';
import Link from 'next/link';
// import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
// eslint-disable-next-line prettier/prettier
import { CommunityIcon, HomeIcon, LogoutIcon, ProfileIcon, ProjectIcon } from '../Icons/FontIcons';

const iconsStyle = 'ml-2 w-[24px] h-[24px] text-blue';
const itemStyle = 'flex w-full justify-center';
const linkStyle = 'mt-2.5  flex items-center w-[213px] h-[40px] rounded-lg hover:bg-lightblue';
const linkActiveStyle = 'mt-2.5 flex items-center w-[213px] h-[40px] bg-lightblue rounded-lg';
const spanStyle = 'ml-2.5 text-xl';

export const Navigation = () => {
  // const [session] = useSession();
  const router = useRouter();

  return (
    <nav className="flex bg-primary justify-between flex-col top-[64px] w-[256px] fixed">
      <ul>
        <li className={itemStyle}>
          <Link href="/" passHref>
            <a className={router.pathname === '/' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <HomeIcon className={iconsStyle} />
              <span className={spanStyle}>Home</span>
            </a>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/community" passHref>
            <a className={router.pathname === '/community' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <CommunityIcon className={iconsStyle} />
              <span className={spanStyle}>Community</span>
            </a>
          </Link>
        </li>
        {/* <li className={itemStyle}>
          <Link href="/blog" passHref>
            <a className={router.pathname === '/blog' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <BlogIcon className={iconsStyle} />
              <span className={spanStyle}>Blog</span>
            </a>
          </Link>
        </li> */}
        {/* <li className={itemStyle}>
          <Link href="/events" passHref>
            <a className={router.pathname === '/events' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <EventIcon className={iconsStyle} />
              <span className={spanStyle}>Events</span>
            </a>
          </Link>
        </li> */}
        <li className={itemStyle}>
          <Link href="/projects" passHref>
            <a className={router.pathname === '/projects' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <ProjectIcon className={iconsStyle} />
              <span className={spanStyle}>Projects</span>
            </a>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/profile" passHref>
            <a className={router.pathname === '/profile' ? `${linkActiveStyle}` : `${linkStyle}`}>
              <ProfileIcon className={iconsStyle} />
              <span className={spanStyle}>Profile</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="mt-10">
        {/* {session && ( */}

        <li
          className={itemStyle}
          // onClick={() =>
          //   signOut({
          //     callbackUrl: `/`
          //   })
          // }
        >
          <Link href="/" passHref>
            <a className={linkStyle}>
              <LogoutIcon className={iconsStyle} />
              <span className={spanStyle}>Logout</span>
            </a>
          </Link>
        </li>
        {/* )} */}
      </ul>
    </nav>
  );
};

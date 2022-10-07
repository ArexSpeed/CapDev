import Image from 'next/image';
import logo from 'assets/logo.png';
import { BookmarkIcon, BookmarkOutlineIcon, NotificationIcon } from '../Icons/FontIcons';
import Link from 'next/link';
// import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/client';

import photo from '../../assets/my-photo.jpg';

const iconsStyle = 'text-blue w-[24px] h-[24px]';

export const Header = () => {
  //   const [session] = useSession();
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const [user, setUser] = useState({});

  //   useEffect(async () => {
  //     if (session) {
  //       const user = await axios.get(`/api/user?id=${session.user.id}`);
  //       setUser(user.data);
  //     }
  //   }, [session]);

  return (
    <header className="flex justify-between w-full p-2.5">
      <div className="flex justify-center items-center ">
        <Image src={logo} width={40} height={40} alt="logo" />
        <span className="text-2xl font-medium ml-2.5">CapDev</span>
      </div>
      <div className="flex items-center w-[200px] justify-between">
        <Link href="/bookmarks" passHref>
          <a
            onMouseEnter={() => setBookmarkHover(true)}
            onMouseLeave={() => setBookmarkHover(false)}>
            {!bookmarkHover ? (
              <BookmarkIcon className={iconsStyle} />
            ) : (
              <BookmarkOutlineIcon className={iconsStyle} />
            )}
          </a>
        </Link>
        <Link href="/notifications" passHref>
          <a>
            <NotificationIcon className={iconsStyle} />
          </a>
        </Link>
        <div className="flex items-center ">
          <span className="mr-2">Arek Cichocki</span>
          <Image src={photo} width={40} height={40} objectFit="contain" alt="" />
        </div>
      </div>
    </header>

    // <header className="header">
    //   <div className="header__logo">
    //     <Image src={logo} width={40} height={40} alt="logo" />
    //     <span>CapDev</span>
    //   </div>
    //   {!session ? (
    //     <div className="header__actions">
    //       <Link href="/" passHref>
    //         <a className="header__actions-login">Login</a>
    //       </Link>
    //     </div>
    //   ) : (
    //     <div className="header__actions">
    //       <Link href="/bookmarks" passHref>
    //         <a
    //           onMouseEnter={() => setBookmarkHover(true)}
    //           onMouseLeave={() => setBookmarkHover(false)}>
    //           {!bookmarkHover ? (
    //             <BookmarkIcon className="header__actions-icon icon-medium secondary-blue" />
    //           ) : (
    //             <BookmarkOutlineIcon className="header__actions-icon icon-medium secondary-blue" />
    //           )}
    //         </a>
    //       </Link>
    //       <Link href="/notifications" passHref>
    //         <a>
    //           <NotificationIcon className="header__actions-icon icon-medium secondary-blue" />
    //         </a>
    //       </Link>
    //       <div className="header__actions-user">
    //         <span>
    //           {/* {session ? user.name : ''} */}
    //           sesstion
    //         </span>
    //         <div className="header__image">
    //           <Image src={photo} width={40} height={40} objectFit="contain" alt="user-img" />
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </header>
  );
};

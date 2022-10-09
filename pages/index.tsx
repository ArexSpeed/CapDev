import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import RegisterForm from 'components/Forms/RegisterForm';
import { useState } from 'react';
import LoginForm from 'components/Forms/LoginForm';
import Image from 'next/image';
import backend from '../assets/work/backend.webp';
import frontend from '../assets/work/frontend.webp';
import design from '../assets/work/design.webp';
import devops from '../assets/work/devops.webp';
import rightimage from '../assets/work/right-image.webp';
import SkillsIconSwitcher from 'components/IconsSwitcher/SkillsIconSwitcher';
import { CommunityCard } from 'components/CommunityCard';
const Home: NextPage = () => {
  const [changeform, setChangeForm] = useState<boolean>(true);

  const toggleChangeForm = () => {
    setChangeForm((current) => !current);
  };
  let imgs = [
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649157117/vwavfuxsoyfgzhogfl7m.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649157215/mx3dgnygp9into3qyk8r.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649159187/lglxametaupdrpahsk4q.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649160947/cjk8esmlcw8kgn96jkjm.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649160997/qdkh9jj8ectqnlvhffig.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161055/fppnzeyvihmrkunxa1bz.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161275/brqwggtjehbqa9lo3ovo.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161331/uv3qfibjqrcsw3ob9cwz.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161410/rlstynfw9uuswfia6ixh.jpg',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161547/krozw7mogenxkquyl18l.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161609/vbie8rkcqw8f2jelkhus.png',
    'https://res.cloudinary.com/dbpsxmtcb/image/upload/v1649161751/k3xsagfgvqnz7cuplsxo.png'
  ];

  let app = [
    {
      src: frontend,
      name: 'Frontend'
    },
    {
      src: backend,
      name: 'Backend'
    },
    {
      src: devops,
      name: 'DevOps'
    },
    {
      src: design,
      name: 'Design'
    }
  ];
  let skills = [
    'html',
    'css',
    'sass',
    'react',
    'javascript',
    'typescript',
    'tailwind',
    'node',
    'next',
    'angular',
    'csharp',
    'cplus'
  ];
  return (
    <div className="w-full h-full bg-secondary">
      <section className="h-screen">
        <div className="h-full">
          <div className="items-center h-screen p-8 text-center">
            <div className="flex flex-row h-full w-full p-12 gap-[20%]">
              <div className="flex flex-col items-start justify-center w-full h-full">
                <h1 className="my-4 text-left text-7xl">
                  Welcome to <span className="text-blue">CapDev Community</span>
                </h1>
                <a href="/community">
                  <button className="h-12 my-4 font-bold text-center text-white rounded-lg bg-blue w-36">
                    Discover
                  </button>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="h-auto w-[489px] bg-white">
                  {changeform ? <LoginForm /> : <RegisterForm />}
                </div>
                <div className="flex items-center justify-center w-[489px] h-16 mt-8 text-center bg-white rounded-lg">
                  <span className="m-4">Do not have an account?</span>
                  <button className="text-blue" onClick={toggleChangeForm}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-full">
          <div className="items-center h-screen p-8 text-center">
            <div className="flex flex-row h-[400px] w-full p-12">
              <div className="flex items-center w-1/2 h-full">
                <Swiper
                  direction={'vertical'}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  loop={true}
                  pagination={{
                    clickable: true
                  }}
                  modules={[Autoplay]}
                  className="w-full h-full mySwiper">
                  <SwiperSlide className="flex items-center justify-center text-center bg-transparent">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center text-center bg-transparent">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="items-center justify-center text-center bg-transparentflex">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center text-center bg-transparent">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center text-center bg-transparent">
                    <CommunityCard />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex items-center w-full h-full">
                <h1 className="text-right text-7xl">
                  Find perfect <span className="text-blue">developer</span> for{' '}
                  <span className="text-blue">your project</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-full">
          <div className="items-center h-full p-8 text-center">
            <div className="flex flex-col w-3/4 h-full p-12 m-auto">
              <div className="text-left text-7xl">
                <h1>
                  Meet <span className="text-blue">project made</span> by our developers and check
                  their <span className="text-blue">incredible work</span>
                </h1>
              </div>
              <div className="grid grid-flow-col grid-rows-2 gap-16 my-16">
                {imgs.map((img, index) => (
                  <Image
                    src={img}
                    alt={index.toString()}
                    width="45"
                    height="45"
                    layout="fixed"
                    key={index}></Image>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-full">
          <div className="items-center h-full p-8 text-center">
            <div className="flex flex-row h-full w-full p-12 gap-[20%]">
              <div className="flex flex-col items-start justify-center w-full h-full">
                <h1 className="my-4 text-left text-7xl">
                  Every part of application design and develop is handle by our developers
                </h1>
                <ul className="flex flex-col items-center justify-center">
                  {app.map((ap, index) => (
                    <li className="flex items-center justify-center my-5" key={index}>
                      <Image
                        src={ap.src}
                        alt={index.toString()}
                        width="70"
                        height="70"
                        layout="fixed"></Image>
                      <span className="text-32" key={ap.name}>
                        {ap.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items-center justify-center w-full h-full">
                <Image src={rightimage} alt={'right-image'} layout="fixed" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-full">
          <div className="items-center h-full p-8 text-center">
            <div className="flex flex-col w-3/4 h-full p-12 m-auto">
              <div className="text-left text-7xl">
                <h1>
                  Our <span className="text-blue">developers</span> have over
                  <span className="text-blue"> 50 </span>skills and technology
                </h1>
              </div>
              <div className="grid grid-flow-col grid-rows-2 gap-32 my-32">
                {skills.map((skill, index) => (
                  <div className="">
                    <SkillsIconSwitcher name={skill} className="w-16 h-16 " />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

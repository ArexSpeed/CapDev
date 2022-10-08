import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import CommunityCard from 'components/Community/communitycard';
const Home: NextPage = () => {
  return (
    <div className="bg-secondary w-full h-full">
      <section className="h-screen">
        <div className="h-screen">
          <div className="p-8 text-center items-center h-screen">
            <div className="flex flex-row h-full w-full p-12 gap-[20%]">
              <div className="h-full w-full flex flex-col justify-center items-start">
                <h1 className="text-7xl text-left my-4">
                  Welcome to <span className="text-blue">CapDev Community</span>
                </h1>
                <button className="bg-blue h-12 w-36 text-center my-4 text-white font-bold">
                  Discover
                </button>
              </div>
              <div className="h-full w-full flex items-center justify-center">
                <div className="h-[327px] w-[489px] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-screen">
          <div className="p-8 text-center items-center h-screen">
            <div className="flex flex-row h-[400px] w-full p-12">
              <div className="h-full w-1/2 flex items-center">
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
                  className="mySwiper w-full h-full">
                  <SwiperSlide className="text-center bg-transparent flex justify-center items-center">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-transparent flex justify-center items-center">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-transparentflex justify-center items-center">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-transparent flex justify-center items-center">
                    <CommunityCard />
                  </SwiperSlide>
                  <SwiperSlide className="text-center bg-transparent flex justify-center items-center">
                    <CommunityCard />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="h-full w-full flex items-center">
                <h1 className="text-7xl text-right">
                  Find perfect <span className="text-blue">developer</span> for{' '}
                  <span className="text-blue">your project</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-screen">
          <div className="p-8 text-center items-center h-screen">
            <div className="flex flex-col h-full w-3/4 p-12 m-auto">
              <div className="text-7xl text-left">
                <h1>Meet project made by our developers and check their incredible work</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

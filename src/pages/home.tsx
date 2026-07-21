import SEO from "../components/shared/seo";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HomePage() {
  return (
    <>
      <SEO
        description="ini adalah demo home page"
        title="home page"
        url={window.location.href + "/"}
      />
      <Body />
    </>
  );
}

const Body = () => {
  return (
    <div className="h-screen">
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-screen bg-blue-400 flex items-center justify-center">
            <img
              src={window.location.href + "/cover.jpg"}
              alt=""
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-red-400 flex items-center justify-center">
            <p className="">ini contoh slider</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-green-400 flex items-center justify-center">
            <p className="">ini contoh slider</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

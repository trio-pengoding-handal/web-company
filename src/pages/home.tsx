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

const sliderItem: { title: string[]; img: string }[] = [
  {
    title: ["Building Excellenc", 'test enter'],
    img: "1.jpg",
  },
  {
    title: ["Building Excellenc", 'test enter'],
    img: "2.jpg",
  },
  {
    title: ["Building Excellenc", 'test enter'],
    img: "3.jpg",
  },
];

const Body = () => {
  return (
    <div className="h-screen">
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        loop={true}
      >
        {sliderItem.map((i) => (
          <SwiperSlide>
            <div
              className="h-screen flex items-center justify-center"
              style={{
                backgroundImage: `url(${window.location.href}/slider1/${i.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-full w-full bg-black/70 flex items-center px-10 sm:px-20 xl:px-60">
                <div className="flex flex-col border-l-8 border-white pl-5 sm:pl-10">
                  {i.title.map((j) => (
                    <p className="text-white text-5xl sm:text-7xl">{j}</p>
                  ))}
                </div>
              </div>
              {/* <img
                src={window.location.href + "/cover.jpg"}
                alt=""
                className=""
              /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

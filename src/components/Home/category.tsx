import { Typography } from "@material-tailwind/react";
import Tag from "../../utilities/Tag";
import { Leftarrow } from "../images/Leftarrow";
import { Rightarrow } from "../images/rightarrow";
import { Computer } from "../images/computer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";

function Category() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesPerView(5);
      setSpaceBetween(10);
    } else {
      setSlidesPerView(3);
      setSpaceBetween(20);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <>
      <div className="mt-10  md:mt-16">
        <section className="md:ml-2 md:mr-28 ml-3 ">
          <Tag tagName="categories" />
          <div className="flex gap-4 justify-between  mt-2  md:mt-8 mr-6">
            <Typography
              placeholder={undefined}
              variant="small"
              className="md:text-2xl"
            >
              Browse By Category
            </Typography>
            <div className="flex gap-4">
              <div className="w-8 h-8 hover:bg-blue-gray-600  bg-blue-gray-100  cursor-pointer rounded-full  transition-colors duration-500  justify-center  flex items-center mb-4">
                <Leftarrow />
              </div>
              <div className="w-8 h-8 rounded-full  justify-center  flex items-center  hover:bg-blue-gray-600  transition-colors duration-300  bg-blue-gray-100  cursor-pointer ">
                <Rightarrow />
              </div>
            </div>
          </div>
        </section>
        <div className="ml-3  mt-4">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper ml-3"
          >
            <section className="md:mt-16  flex  gap-10 md:justify-center ml-8  md:ml-8">
              <SwiperSlide>
                <div className="md:w-28 h-24 border-2  border-gray-300 items-center  hover:bg-red-500  group transition-colors  w-24 duration-500   cursor-pointer  mb-8">
                  <div className="md:ml-10 ml-8 mt-3  hover:fill-white">
                    <Computer />
                  </div>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    className="md:ml-8 ml-6 mt-3 group-hover:text-white transition-colors duration-500 text-sm  "
                  >
                    Camera
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-28 h-24 border-2  border-gray-300 items-center  hover:bg-red-500  group transition-colors  w-24 duration-500   cursor-pointer  mb-8">
                  <div className="md:ml-10 ml-8 mt-3  hover:fill-white">
                    <Computer />
                  </div>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    className="md:ml-8 ml-6 mt-3 group-hover:text-white transition-colors duration-500 text-sm  "
                  >
                    Camera
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-28 h-24 border-2  border-gray-300 items-center  hover:bg-red-500  group transition-colors  w-24 duration-500   cursor-pointer  mb-8">
                  <div className="md:ml-10 ml-8 mt-3  hover:fill-white">
                    <Computer />
                  </div>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    className="md:ml-8 ml-6 mt-3 group-hover:text-white transition-colors duration-500 text-sm  "
                  >
                    Camera
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-28 h-24 border-2  border-gray-300 items-center  hover:bg-red-500  group transition-colors  w-24 duration-500   cursor-pointer  mb-8">
                  <div className="md:ml-10 ml-8 mt-3  hover:fill-white">
                    <Computer />
                  </div>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    className="md:ml-8 ml-6 mt-3 group-hover:text-white transition-colors duration-500 text-sm  "
                  >
                    Camera
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-28 h-24 border-2  border-gray-300 items-center  hover:bg-red-500  group transition-colors  w-24 duration-500   cursor-pointer  mb-8">
                  <div className="md:ml-10 ml-8 mt-3  hover:fill-white">
                    <Computer />
                  </div>
                  <Typography
                    variant="small"
                    placeholder={undefined}
                    className="md:ml-8 ml-6 mt-3 group-hover:text-white transition-colors duration-500 text-sm  "
                  >
                    Camera
                  </Typography>
                </div>
              </SwiperSlide>
            </section>
          </Swiper>
        </div>
        <div className="h-1 border-b-2 border-gray-600 w-3/5  mx-auto  mb-8"></div>
      </div>
    </>
  );
}

export default Category;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectCoverflow,
  FreeMode,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import ShoppingCard from "../Shoppingcard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Sliders {
  slide: any;
  image: string;
  title: string;
}


const Flashsale:  React.FC  =() =>{
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          pagination={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {/* {slide.map((slide:Sliders) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))} */}
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone2.png"
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
          {/* {slide.map((slide:Sliders) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))} */}
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ShoppingCard
              name="Product 1"
              description="Description of Product 1"
              price={99.99}
              imageSrc="phone2.png"
            />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
} 

export default Flashsale;

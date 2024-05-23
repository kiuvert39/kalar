import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  FreeMode,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import ShoppingCard from "../Shoppingcard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

interface Slides {
  id: string;
  Images: string[];
  title: string;
  Name: string;
  Price: number;
}
//remember  to  connect not found error from  backend to  frontend
const Flashsale: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [slideData, setSlideData] = useState<Slides[]>([]);

const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/api/product/get-all_products"
      );
      const updateData = response.data.message.map((product: any) => ({
        ...product,
        Images: product.Images[0],
      }));
      console.log("images", updateData);
      setSlideData(updateData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleRatingClick(id: string, rating: number): void {
    throw new Error("Function not implemented.");
  }

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
            slideShadows: false,
          }}
        >
          {Array.isArray(slideData) &&
            slideData.map((slide: Slides) => (
              <SwiperSlide key={slide.id}>
                <ShoppingCard
                  name={slide.Name}
                  price={slide.Price}
                  imageSrc={slide.Images}
                  onRatingClick={(rating: number) =>
                    handleRatingClick(slide.id, rating)
                  }
                  rating={3}
                />
              </SwiperSlide>
            ))}
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
          {Array.isArray(slideData) &&
            slideData.map((slide: Slides) => (
              <SwiperSlide key={slide.id}>
                <ShoppingCard
                  name={slide.Name}
                  price={slide.Price}
                  imageSrc={slide.Images}
                  onRatingClick={(rating: number) =>
                    handleRatingClick(slide.id, rating)
                  }
                  rating={3}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default Flashsale;

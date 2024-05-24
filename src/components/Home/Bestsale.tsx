import React from "react";
import Tag from "../../utilities/Tag";
import { Button, Typography } from "@material-tailwind/react";
import { Pagination, FreeMode, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import ShoppingCard from "../Shoppingcard";

interface Slides {
  id: string;
  Images: string[];
  title: string;
  Name: string;
  Price: number;
}

function Bestsale() {
  // const [slidesPerView, setSlidesPerView] = useState(3);
  const [buttonSize, setButtonSize] = useState<"sm" | "md" | "lg">("sm");
  const [slideData, setSlideData] = useState<Slides[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

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

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      // setSlidesPerView(5);
      setButtonSize("md");
    } else {
      // setSlidesPerView(3);
      setButtonSize("sm");
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
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
      <div>
        <section className="md:ml-8 md:mr-28 ml-3 ">
          <Tag tagName="This Month" />
          <div className="flex gap-4 justify-between  mt-2  md:mt-8 mr-6">
            <Typography
              placeholder={undefined}
              variant="small"
              className="md:text-2xl"
            >
              Best Selling Products
            </Typography>
            <div className=" flex justify-center  ">
              <a href="#">
                <Button
                  placeholder={undefined}
                  className=""
                  color="red"
                  size={buttonSize}
                >
                  View All
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="md:mt-24">
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
        </section>
      </div>
    </>
  );
}

export default Bestsale;

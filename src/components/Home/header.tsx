import { Typography } from "@material-tailwind/react";
import { VscArrowRight } from "react-icons/vsc";
import { Carousel } from "@material-tailwind/react";
import { useState, useEffect } from "react";
const carouselData = {
  images: ["phone.png", "phone2.png", "phone3.png"],
};

function Header() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselData.images.length
      );
    }, 30000); // 1 minute interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full  bg-black flex mt-16 gap-1 md:gap-52 md:justify-center md:items-center pb-8">
      <div className=""> 
        <div className="flex pt-8 pl-5 gap-3">
          <img src="app.png" alt="apple" width="38px" />
          <Typography
            placeholder={undefined}
            variant="h6"
            className="text-white  text-xs pt-4"
          >
            Iphone 14 series
          </Typography>
        </div>
        <div className="pl-5  -pt-1 ">
          <Typography
            variant="h2"
            placeholder={undefined}
            className="text-white text-base pt-4  md:text-3xl"
          >
            Up to 10%
            <br /> off voucher
          </Typography>
        </div>
        <div className="pl-5 -pt-3 flex gap-1  ">
          <Typography
            variant="small"
            placeholder={undefined}
            className="text-white text-base pt-2 underline"
          >
            <a href="#">shop now </a>
          </Typography>
          <VscArrowRight color="white" size={32} className="pt-3" />
        </div>
      </div>
      <Carousel
        className="rounded-xl md:w-auto w-64 h-34 pt-4"
        placeholder={undefined}
      >
        {" "}
        <img
          src={carouselData.images[imageIndex]}
          alt="phone"
          className={`pt-8 md:w-80 transition-opacity duration-500  object-cover h-full w-full"`}
          width="176px"
        />
      </Carousel>
    </div>
  );
}

export default Header;

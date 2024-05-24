import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

function Emhance() {
  // const [slidesPerView, setSlidesPerView] = useState(3);
  const [buttonSize, setButtonSize] = useState<"sm" | "md" | "lg">("sm");
  const [imagesize, setImageSize] = useState(140);
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      // setSlidesPerView(5);
      setButtonSize("md");
      setImageSize(400);
    } else {
      // setSlidesPerView(3);
      setButtonSize("sm");
    }
  };
updateSlidesPerView()
  return (
    <>
      <div className="">
        <div className="flex mt-12 justify-center mb-12">
          <div className="w-80 md:h-80 bg-black text-white h-min md:w-7/12 p-4  ">
            <Typography
              placeholder={undefined}
              className="text-sm text-green-300 ml-2
                md:text-2xl md:pt-9 md:ml-7 "
            >
              Categories
            </Typography>
            <div
              className="flex pt-2 md:justify-center
             md:gap-12  md:-mt-8"
            >
              <div className="ml-2  md:w-64	md:pt-10">
                <Typography
                  placeholder={undefined}
                  className="md:text-3xl    md:ml-3"
                >
                  Enhance Your Music Experience
                </Typography>
              </div>
              <div className="">
                <img
                  src="/BOOMBOX.png"
                  width={imagesize}
                  alt="boombox"
                  className="w-23 md:w-38 lg:w-80"
                />
              </div>
            </div>
            <div className="ml-2  md:ml-8">
              <a href="/home">
                <Button
                  placeholder={undefined}
                  className=""
                  color="green"
                  size={buttonSize}
                >
                  View All
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emhance;

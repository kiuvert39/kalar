import { Typography } from "@material-tailwind/react";
import "../../App.css";

function Newarrival() {
  return (
    <div    className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-4 mb-24 maindiv">
        {/* First div */}
        <div className=" relative md:w-80  h-96 mainplay bg-black">
          <img
            src="/playstation.png"
            alt="playstation"
            className="md:w-full h-auto lg:h-full object-cover  pt-7 "
          />
          <div className="absolute inset-0 word1 ">
            <p className="text-white text-xl font-bold ">PlayStation 5</p>
            <div    className="w-length">
            <Typography placeholder={undefined}  className="text-gray-500 text-sm   w-26 mr-28 pt-2">Black and White version of the PS5 coming out on sale.</Typography>
            </div>
            <Typography placeholder={undefined}  className="text-white text-sm   w-26 mr-8 pt-2 underline">show now</Typography>
          </div>
        </div>

        {/* Second div */}
        <div className="lg:w-1/2">
          <div className="flex flex-col w-96  h-96 ">
            {/* First sub div */}
            <div className="h-1/2 mb-3  relative w-11/12  woman">
              {/* Content */}
              <img
                src="/woman.png"
                alt="playstation"
                className="w-full h-auto lg:h-full object-cover"
              />
            <div className="absolute inset-0  word2 ">
              <p className="text-white text-xl font-bold ">Women’s Collections</p>
              <div    className="w-length">
              <Typography placeholder={undefined}  className="text-gray-500 text-sm   w-26 mr-72 pt-2">Featured woman collections that give you another vibe..</Typography>
              </div>
              <Typography placeholder={undefined}  className="text-white text-sm   w-26 mr-8 pt-2 underline">show now</Typography>
            </div>
            </div>

            {/* Second sub div */}
            <div className="h-1/2 flex gap-2   wordspray">
              {/* First sub sub div */}
              <div className="h-40 relative  bg-black boom justify-center flex items-center ">
                {/* Content */}
                <img
                  src="/spay.png"
                  alt="playstation"
                  className="w-50 h-22 lg:h-36 object-cover"
                />
                <div className="absolute   inset-0 spray2">
                <p className="text-white text-xl font-bold ">Perfume</p>
                <div    className="w-length">
                  <Typography placeholder={undefined} variant="small"  className="text-gray-500 w-26 mr-24 pt-1">GUCCI INTENSE OUD EDP</Typography>
                </div>
                  <Typography placeholder={undefined}  className="text-white text-sm   w-26 mr-8  underline">show now</Typography>
                    
                </div>
              </div>

              {/* Second sub sub div */}
              <div className="h-40 relative  bg-black spray justify-center flex items-center div2">
                {/* Content */}
                <img
                  src="/echo-png.png"
                  alt="playstation"
                  className="w-50 h-22 lg:h-36 object-cover"
                />
                <div className="absolute   inset-0 flex items-center justify-center">                  
                <div className="absolute   inset-0 spray2">
                <p className="text-white text-xl font-bold ">Speakers</p>
                <div    className="w-length">
                  <Typography placeholder={undefined} variant="small"  className="text-gray-500 w-26 mr-24 pt-1">Amazon wireless speakers</Typography>
                </div>
                  <Typography placeholder={undefined}  className="text-white text-sm   w-26 mr-8  underline">show now</Typography>
                    
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newarrival;

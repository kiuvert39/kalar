import { Input, Typography, Textarea, Button } from "@material-tailwind/react"


function NewProduct() {
  return (
    <div className=" overflow-hidden ml-8 ">
      <div className="font-poppins text-base ">
        <Typography variant="h3" placeholder={undefined} className="font-poppins"> Produt Details </Typography>
      </div>
      <div className=" mt-5 w-auto border-r-green-100 main-bg rounded-xl">
        <form className=" pt-8 pl-5 flex row-span-2 gap-20">
          <div>
            <div>
              <Typography placeholder={undefined} className=" mb-3" >Product name</Typography>
              <Input
                placeholder={undefined}
                className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}

                containerProps={{ className: "min-w-[150px]" }} crossOrigin={undefined} />
            </div>

            <div className=" pt-4">
              <Typography placeholder={undefined} className=" mb-3" >Description</Typography>
              <Textarea size="md" label="Description" />
            </div>
            <div className="  pt-4">
              <Typography placeholder={undefined} className=" mb-3" >Category</Typography>
              <Input
                placeholder={undefined}
                className="!border  !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}

                containerProps={{ className: "min-w-[150px]" }} crossOrigin={undefined} />
            </div>

            <div className="pt-4">
              <Typography placeholder={undefined} className=" mb-3" >Brand Name</Typography>
              <Input
                placeholder={undefined}
                className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}

                containerProps={{ className: "min-w-[150px]" }} crossOrigin={undefined} />
            </div>

            <div className="flex row-span-2 gap-4">
              <div className="pt-4">
                <Typography placeholder={undefined} className=" mb-3" >Price</Typography>
                <Input
                  placeholder={undefined}
                  className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}

                  containerProps={{ className: "min-w-[150px]" }} crossOrigin={undefined} />
              </div>

              <div className="pt-4">
                <Typography placeholder={undefined} className=" mb-3" >Stock Quantity</Typography>
                <Input
                  placeholder={undefined}
                  className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}

                  containerProps={{ className: "min-w-[150px]" }} crossOrigin={undefined} />
              </div>
            </div>
          </div>
          <section className="image-section ">
            <div className=" max-w-96 h-96 bg-gray-500 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" className="object-cover overflow-hidden w-full h-full rounded-lg" alt="img" />
            </div>

            <div className=" mt-14 w-96 bg-blue-gray-300 h-32 flex justify-center border-dashed border-2 border-b-black cursor-pointer" onClick={() => document.querySelector(".input-field")}>
              <input type="file" className=" mt-12 ml-28 cursor-pointer " accept="image/*" />
            </div>
            <div>
              <Button variant="gradient" className=" mt-12 ml-12 submit-button " size="lg" color="black" placeholder={undefined}>Submit</Button>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default NewProduct
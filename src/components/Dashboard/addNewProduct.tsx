import { Input, Typography, Textarea, Button } from "@material-tailwind/react";
import { productSchema } from "../../models/productSchema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValue } from "../../models/productSchema";
import axios from "axios";
import { useState } from "react";

function NewProduct() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<FormValue>({ resolver: zodResolver(productSchema) });

  //   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const files = e.target.files;
  //     if (files) {
  //         setSelectedFiles(Array.from(files));
  //     }
  // };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    setSelectedFiles(files)
  };

  const onSubmit = async (data: FormValue) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Description", data.Descript);
    formData.append("category", data.category);
    formData.append("Brand", data.Brand);
    formData.append("Price", String(data.Price));
    formData.append("Quantity", String(data.Quontity));
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("Images", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5005/api/product/register_product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      reset()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" overflow-hidden ml-8 ">
      <div className="font-poppins text-base ">
        <Typography
          variant="h3"
          placeholder={undefined}
          className="font-poppins"
        >
          {" "}
          Produt Details{" "}
        </Typography>
      </div>
      <div className=" mt-5 w-auto border-r-green-100 main-bg rounded-xl">
        <form
          className=" pt-8 pl-5 flex row-span-2 gap-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div>
              <Typography placeholder={undefined} className=" mb-3">
                Product name
              </Typography>
              <Controller
                name="Name"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder={undefined}
                    className="!border  !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    {...register("Name")}
                    containerProps={{ className: "min-w-[150px]" }}
                    crossOrigin={undefined}
                  />
                )}
              />
              <div className=" mt-4">
                {errors.Name && typeof errors.Name.message === "string" && (
                  <span className=" text-red-800">{errors.Name.message}</span>
                )}
              </div>
            </div>

            <div className=" pt-4">
              <Typography placeholder={undefined} className=" mb-3">
                Description
              </Typography>
              <Controller
                name="Descript"
                control={control}
                render={({ field }) => (
                  <Textarea
                    size="md"
                    label="Description"
                    {...register("Descript")}
                    placeholder={undefined}
                  />
                )}
              />
              <div className=" mt-4">
                {errors.Descript &&
                  typeof errors.Descript.message === "string" && (
                    <span className=" text-red-800">
                      {errors.Descript.message}
                    </span>
                  )}
              </div>
            </div>
            <div className="  pt-4">
              <Typography placeholder={undefined} className=" mb-3">
                Category
              </Typography>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder={undefined}
                    className="!border  !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    {...register("category")}
                    containerProps={{ className: "min-w-[150px]" }}
                    crossOrigin={undefined}
                  />
                )}
              />
              <div className=" mt-4">
                {errors.category &&
                  typeof errors.category.message === "string" && (
                    <span className=" text-red-800">
                      {errors.category.message}
                    </span>
                  )}
              </div>
            </div>

            <div className="pt-4">
              <Typography placeholder={undefined} className=" mb-3">
                Brand Name
              </Typography>
              <Controller
                name="Brand"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder={undefined}
                    className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    {...register("Brand")}
                    containerProps={{ className: "min-w-[150px]" }}
                    crossOrigin={undefined}
                  />
                )}
              />
              <div className=" mt-4">
                {errors.Brand && typeof errors.Brand.message === "string" && (
                  <span className=" text-red-800">{errors.Brand.message}</span>
                )}
              </div>
            </div>

            <div className="flex row-span-2 gap-4">
              <div className="pt-4">
                <Typography placeholder={undefined} className=" mb-3">
                  Price
                </Typography>
                <Controller
                  name="Price"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder={undefined}
                      className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      {...register("Price", { valueAsNumber: true })}
                      containerProps={{ className: "min-w-[150px]" }}
                      crossOrigin={undefined}
                    />
                  )}
                />
                <div className=" mt-4">
                  {errors.Price && typeof errors.Price.message === "string" && (
                    <span className=" text-red-800">
                      {errors.Price.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Typography placeholder={undefined} className=" mb-3">
                  Stock Quontity
                </Typography>

                <Controller
                  name="Quontity"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder={undefined}
                      className="!border !border-gray-300 bg-white  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      {...register("Quontity", { valueAsNumber: true })}
                      type="number"
                      required
                      containerProps={{ className: "min-w-[150px]" }}
                      crossOrigin={undefined}
                    />
                  )}
                />
                <div className=" mt-4">
                  {errors.Quontity &&
                    typeof errors.Quontity.message === "string" && (
                      <span className=" text-red-800">
                        {errors.Quontity.message}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
          <section className="image-section ">
            {/* <div className=" max-w-96 h-96 bg-gray-500 rounded-lg overflow-hidden">
            {selectedFiles.length > 0 && (
               
                    <img className="object-cover overflow-hidden w-full h-full rounded-lg" src={URL.createObjectURL(selectedFiles[0])} alt="First Image" />
                
            )}
            </div> */}

            <div className=" mt-14 w-96 bg-blue-gray-300 h-32 flex justify-center border-dashed border-2 border-b-black cursor-pointer">
              <Controller
                name="Images"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    className="mt-12 ml-28 cursor-pointer"
                    accept="image/*"
                    {...register("Images", { required: true })}
                    onChange={handleFileChange}
                    multiple
                  />
                )}
              />

              <div className=" mt-4">
                {errors.Images && typeof errors.Images.message === "string" && (
                  <span className=" text-red-800">{errors.Images.message}</span>
                )}
              </div>
            </div>
            <div className=" mt-4 ml-36">
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                color="black"
                placeholder={undefined}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </section>
        </form>
        {isSubmitting && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999 // Ensure the loading animation appears on top of other content
          }}
        >
          <div>Loading animation here...</div>
        </div>
      )}
      </div>
    </div>
  );
}

export default NewProduct;

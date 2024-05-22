import { Typography } from "@material-tailwind/react"
import Tag from "../../utilities/Tag"
import { Leftarrow } from "../images/Leftarrow"
import { Rightarrow } from "../images/rightarrow"


function Category() {
  return (
    <>
       <div className="mt-16  md:mt-24">
            <section>
                <Tag tagName="categories"/>
                <div className="flex gap-4 justify-between  mt-2  md:mt-8 mr-6">
                    <Typography placeholder={undefined} variant="small" className="md:text-2xl">Browse By Category</Typography> 
                    <div  className="flex gap-4">
                    <div className="w-8 h-8 hover:bg-blue-gray-600  bg-blue-gray-100  cursor-pointer rounded-full  justify-center  flex items-center "> 
                        <Leftarrow />
                    </div>
                      <div className="w-8 h-8 rounded-full  justify-center  flex items-center  hover:bg-blue-gray-600  bg-blue-gray-100  cursor-pointer ">
                        <Rightarrow/>
                      </div>  
                    </div>
                </div> 
                 
            </section>
            <section>
              <div>

              </div>
            </section>
       </div>
    </>
  )
}

export default Category
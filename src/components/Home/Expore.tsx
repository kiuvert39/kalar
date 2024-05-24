import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../images/Leftarrow'
import { Rightarrow } from '../images/rightarrow'
import { Button, Typography } from '@material-tailwind/react'
import Tag from '../../utilities/Tag'
import { getProducts, Product, } from '../apis/getProducts.api'
import ShoppingCard from '../Shoppingcard'



function Expore() {
    const [slideData, setSlideData] = useState<Product[]>([]);
    useEffect(() => {
        getProducts(setSlideData);
    }, []);
    
    function handleRatingClick(id: any, rating: number): void {
        throw new Error('Function not implemented.')
    }

    const displayedProducts = slideData.slice(0, 8);

  return (
    <div>
        <section className="md:ml-2 md:mr-28 ml-3 ">
          <Tag tagName="Our Products" />
          <div className="flex gap-8 justify-between  mt-2  md:mt-8 ml-2 ">
            <Typography
              placeholder={undefined}
              variant="small"
              className="md:text-2xl"
            >
              Explore Our Products
            </Typography>
            <div className="flex gap-4  -pl-32">
              <div className="w-8 h-8 hover:bg-blue-gray-600  bg-blue-gray-100  cursor-pointer rounded-full  transition-colors duration-500  justify-center  flex items-center mb-4">
                <Leftarrow />
              </div>
              <div className="w-8 h-8 rounded-full  justify-center  flex items-center  hover:bg-blue-gray-600  transition-colors duration-300  bg-blue-gray-100  cursor-pointer ">
                <Rightarrow />
              </div>
            </div>
          </div>
        </section>

        <div className=" md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 hidden">

            {displayedProducts.map((product) => (
              <ShoppingCard
                     name={product.Name}
                        price={product.Price}
                        imageSrc={product.Images}
                        onRatingClick={(rating: number) =>
                        handleRatingClick(product.id, rating)
                        }
                    rating={3}
                />
            ))}

        </div>
        <div className=" flex justify-center mb-8 mt-8">
              <a href="/home">
                <Button placeholder={undefined} className="" color="red">
                  View All Products
                </Button>
              </a>
            </div>
    </div>
  )
}

export default Expore
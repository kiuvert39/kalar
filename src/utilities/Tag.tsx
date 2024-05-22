import { Typography } from '@material-tailwind/react'
import React from 'react'


interface Tags {
    tagName:string
  }
const Tag: React.FC<Tags> =({tagName}) =>{
  return ( 
    <>
          <div className="flex  gap-2 md:mt-2">
              <div className="md:w-5 md:h-10 bg-red-500 w-2 h-4"></div>
              <Typography
                placeholder={undefined}
                variant="h6"
                className="text-red-500  md:mt-2"
              >
                {tagName}
              
              </Typography>
            </div>
    
    </>
  )
}

export default Tag;

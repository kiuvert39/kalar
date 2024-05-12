
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

function Navicon() {
  return (
    <div  className='flex gap-5'>
       <FiShoppingCart  className=' cursor-pointer	w-8'/>
       <IoPersonOutline className=' cursor-pointer	w-8'/>
    </div>
  )
}

export default Navicon
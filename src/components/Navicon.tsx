
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


function Navicon() {
  return (
    <div  className='flex gap-5'>
       <FiShoppingCart  className=' cursor-pointer	w-8'/>
       <Link to="profile">
       <IoPersonOutline className=' cursor-pointer	w-8'/>
       </Link>
    </div>
  )
}

export default Navicon
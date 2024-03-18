import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Dashboard/sidebar"


function Dashboard() {
  return (
    <>
      <div className="flex gap-80 ">

        <div><Sidebar /></div>
        <div className='flex-initial mt-10'>
          <Outlet />
        </div>
      </div>
    </>

  )
}

export default Dashboard
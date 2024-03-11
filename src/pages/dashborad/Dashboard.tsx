import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Dashboard/sidebar"


function Dashboard() {
  return (
    <>
      <div className="flex gap-96">

        <div><Sidebar /></div>
        <div className='flex-initial w-96 mt-10'>
          <Outlet />
        </div>
      </div>
    </>

  )
}

export default Dashboard
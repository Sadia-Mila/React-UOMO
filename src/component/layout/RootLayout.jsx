import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer className={'bg-[#E4E4E4]'}/>      
    </div>
  )
}

export default RootLayout

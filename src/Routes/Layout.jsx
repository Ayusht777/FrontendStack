import { Outlet } from 'react-router-dom'
import Navbar from '@/Components/Shared/Navbar'
import Footer from '@/Components/Shared/Footer'
const Layout = () => {
    return (
        <div className='w-full flex flex-col items-center relative '>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
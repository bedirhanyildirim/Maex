import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

export default function SignedIn() {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <Header />
      <div id="content" className="w-full h-full p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
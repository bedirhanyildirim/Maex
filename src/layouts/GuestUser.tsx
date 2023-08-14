import { Outlet } from 'react-router-dom'

export default function GuestUser() {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <div id="content" className="w-full h-full flex justify-center p-4">
        <Outlet />
      </div>
    </div>
  )
}
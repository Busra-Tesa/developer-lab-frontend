import React from "react";
import notFound from '../assets/images/notFound.jpg'
function NotFoundPage() {
  return (<>
    {/* <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
    </div> */}
    <img src={notFound} alt="404" />
    <p className="text-gray-500 text-center text-2xl">The page you are looking for does not exist.</p>

  </>

  )
}
export default NotFoundPage;
import { useState } from 'react'
import ImageUpload from './components/home'
import Early_Blight from './components/Early_Blight'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div>
      {/* Global Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  )
}

export default App

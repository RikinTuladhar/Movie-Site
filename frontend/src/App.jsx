import { useReducer, useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/pages/HomePage'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App

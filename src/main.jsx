import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles.js'
import VehicleView from './Views/VehicleView.jsx'

const routes = [
  {
    path:'/',
    element:<App/>
  }
]

vehicles.forEach(item=>{
  routes.push({
    path: item.name,
    element: <VehicleView vehicle={item}/>
  })
})

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

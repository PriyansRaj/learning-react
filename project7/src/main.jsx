import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
       <Route path='' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
    </Route>
   

    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

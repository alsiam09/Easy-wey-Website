import { useState } from 'react'
import React, { useEffect } from 'react'


import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLaOut from './Page/RootLaOut'
import MainHome from './Page/MainHome'
import Intro from './componat/Intro'
import ToLet from './Page/ToLet'

function App() {
  let [ open , setOpen ] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(!false)
      },[2000])
},[])
  const Router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLaOut/>}>
      <Route path='/' element={<MainHome/>} ></Route>
      <Route path='/To-let' element={<ToLet/>} ></Route>
    </Route>
  ))
  return (
    <>
    {open == true ?
    <RouterProvider router={Router} />
    :
    <Intro/>
    }
    </>
  )
}

export default App

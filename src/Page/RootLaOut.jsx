import React from 'react'
import Nav from '../componat/Nav'
import Footer from '../componat/Footer'
import { Outlet } from 'react-router-dom'
const RootLaOut = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLaOut
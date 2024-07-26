import React, { useEffect } from 'react'
import Logo from '../assets/Logo.png.png'
const Nav = () => {
  useEffect(()=>{
    setTimeout(()=>{
      console.log("ami");
      },[10000])
},[])

  return (
    <section className='bg-[#000] '>
      <div className="  container mx-auto h-[70px] md:h-[80px] flex justify-center md:justify-start items-center">
        <div className="WebName text-[35px] text-[#fff] font-[700]">Easy Way</div>
      </div>
    </section>
  )
}

export default Nav
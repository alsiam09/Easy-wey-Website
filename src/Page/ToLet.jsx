import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ToLet = () => {
  let itemData = [
    {
      img: "https://i.ibb.co/FqWZbNG/download.jpg",
      tital: "25/A Eskaton garden road",
      price: "3000",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.055617998243!2d90.39431407463697!3d23.745395988969737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8969bddf613%3A0xe96e23f26c0250ac!2s25%2FA%20Eskatan%20Garden%20Rd%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1722069061612!5m2!1sen!2sbd",
      video: "https://www.youtube.com/embed/Yol2njdmnI4?si=dKLEBYbrocdh8beP"
    },
  ]
  let [ detall , setdetal ] = useState(false)
  let [dataitemindex , setdataitemindex] = useState('')
  let handled = (item) => {
    setdetal(!false)
    setdataitemindex(item)
  }
  let handleclose = () =>{
    setdetal(false)
  }
  return (
    <section className='py-[50px] bg-[#262626]'>
        <div className="container flex justify-center md:gap-5 md:justify-start flex-wrap mx-auto">
            {itemData.map((item)=>(
              <>
              <div onClick={()=>handled(item)} className="box rounded-t-[20px] pb-[30px]  w-[90%] md:w-[48%] lg:w-[32%] overflow-hidden ">
                <img className='w-[100%] h-[200px]' src={item.img}  alt="" />
                <div className="tital border-b-2 border-b-[#fff] flex justify-between items-center">
                <h2 className='text-[#fff] text-[20px]'>{item.tital}</h2>
                <h2 className='text-[#fff] text-[20px]'>{item.price}৳</h2>
                </div>
              </div>
            
              
              </>
            ))}
              {detall === true ? <div className=" p-[30px] box fixed z-[999] w-[300px] bg-[#000] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%]">
                <div onClick={handleclose} className="x w-[30px] absolute right-[-10px] top-[-10px] h-[30px] rounded-[50%] p-[5px] bg-[red]">
                <icon className='text-[#fff] text-[20px]'><RxCross2 /></icon>
                </div>
                <h2 className='text-[#fff] text-[20px]'>Title: {dataitemindex.tital}</h2>
                <h2 className='text-[#fff] text-[20px]'>Price: {dataitemindex.price}৳</h2>
                <iframe src={dataitemindex.map} className='w-[100%] h-[150px]' ></iframe>
                <iframe className='w-[100%] h-[200px]' src={dataitemindex.video} ></iframe>
              </div> :
              ""}

        </div>
    </section>
  )
}

export default ToLet
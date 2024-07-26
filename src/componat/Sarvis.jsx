import React from 'react'
import { Link } from 'react-router-dom'
const Sarvis = () => {
    let Data = [
        {
            title : "To-Let",
            subtitle : "Open",
            path: '/To-let'
        },
        {
            title : "Car",
            subtitle : "close",
        },
        {
            title : "Food",
            subtitle : "close",
        },
        {
            title : "Shop",
            subtitle : "close",
        },
    ]
  return (
    <section className='py-[50px] bg-[#262626]'>
        <div className="container mx-auto">
            <h2 className='p-[10px] flex-wrap w-[90%] lg:w-[100%] rounded-[10px] mx-auto bg-[#ffffffc4]'>eywuidwjkdsdhbwq nmghdscdghsdswqvdhwdfwjt</h2>
            <div className="box gap-3 flex flex-wrap w-[100%]  p-[20px]">
                {Data.map((item)=>(
                    <Link to={`${item.path}`} className=" relative cursor-pointer justify-center items-center flex w-[48%] rounded-[15px] md:w-[200px] bg-[#ffffff] border-[3px] border-[#000000] h-[100px] packag">
                        <h2 className='text-[#000] font-[600] text-[25px]'>{item.title}</h2>
                        <span className={`p-[3px] text-[#fff] font-[500] bg-[red] absolute top-0 right-0 rounded-[3px] `}>{item.subtitle}</span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Sarvis
import React from 'react'

const Sarvis = () => {
    let Data = [
        {
            title : "To-Let"
        },
        {
            title : "Car"
        },
        {
            title : "Food"
        },
        {
            title : "Shop"
        },
    ]
  return (
    <section className='py-[50px] bg-[#262626]'>
        <div className="container mx-auto">
            <h2 className='p-[10px] flex-wrap w-[90%] lg:w-[100%] rounded-[10px] mx-auto bg-[#ffffffc4]'>eywuidwjkdsdhbwq nmghdscdghsdswqvdhwdfwjt</h2>
            <div className="box gap-3 flex flex-wrap w-[100%]  p-[20px]">
                {Data.map((item)=>(
                    <div className=" cursor-pointer justify-center items-center flex w-[48%] rounded-[15px] md:w-[200px] bg-[#ffffff] border-[3px] border-[#000000] h-[100px] packag">
                        <h2 className='text-[#000] font-[600] text-[25px]'>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Sarvis
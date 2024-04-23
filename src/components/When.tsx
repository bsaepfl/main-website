import React from 'react'

interface Props {
    id: string;
    title: string;
    list_1: string;
    list_2: string;
}

const When = ({ id, title, list_1, list_2 }: Props) => {
  return (
    <div className='h-full bg-[#021741] w-10/12 md:w-5/12 lg:w-3/12 flex flex-col justify-start items-center rounded-lg'>
        <div className='w-full pt-8 mb-2 text-center'>
            <span className=' text-2xl text-center bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500'>
                {title}
            </span>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <span className=' w-full p-8 md:p-6 2xl:p-10 text-xl font-extrabold italic text-center text-gray-300'>
                {list_1}
            </span>
        </div>
    </div>
  )
}

export default When
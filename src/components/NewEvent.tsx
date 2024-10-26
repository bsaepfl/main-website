import React from 'react'

interface Props {
    titleOrange: string;
    titleGray: string;
    titleGray2: string;
    description: string;
}

const NewEvent = ({ titleOrange, titleGray, titleGray2, description }: Props) => {
  return (
    <div>
        <div className='flex flex-col gap-2 justify-start'>
            <div className='flex flex-row gap-4 justify-center lg:justify-start items-center'>
                <span className='bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-4xl'>
                    {titleOrange}
                </span>
                <span className='hidden md:block bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-4xl'>
                    {titleGray} {titleGray2}
                </span>
                <span className='md:hidden bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-4xl'>
                    {titleGray}
                </span>
            </div>
            { titleGray2 ? 
                <span className='md:hidden bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-4xl text-center'>{titleGray2}</span> 
            : 
                <div className='hidden'></div>
            }
            <span className='pt-10 md:p-0 text-base text-center lg:text-left lg:text-lg lg:px-2 text-gray-300'>
                {description}
            </span>
        </div>
    </div>
  )
}

export default NewEvent
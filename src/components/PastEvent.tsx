import React from 'react';
import Image from 'next/image';

interface Props {
    titleBlue: string;
    titleGray: string;
    description: string;
    image: string;
    image_alt: string;
    lien: string;
    style: string;
}

const PastEvent = ({ titleBlue, titleGray, description, image, image_alt, lien, style }: Props) => {
    return (
        <div className=''>
            <div className='flex flex-col gap-2 justify-start'>
                <div className='flex flex-row gap-4 justify-center lg:justify-start items-center'>
                    <span className='bg-gradient-to-r bg-clip-text text-transparent from-blue-100 to-gray-500 text-3xl md:text-4xl'>
                        {titleBlue}
                    </span>
                    <span className='bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-3xl md:text-4xl'>
                        {titleGray}
                    </span>
                </div>
                <span className='pt-10 md:p-0 text-base text-center lg:text-left lg:text-lg lg:px-2 text-gray-300'>
                    {description}
                </span>
                <div className='flex flex-row w-full'>
                    <div className='hidden lg:flex lg:flex-col justify-center items-center w-10 h-auto'>
                        <div className='mt-14 w-0 h-full border-4 rounded-xl border-dark-400 drop-shadow-6bxl'></div>
                    </div>
                    {image ? (
                        <div className='w-full flex justify-center items-center'>
                            <a href={lien} target="_blank" rel="noreferrer" className='py-10 w-10/12 md:w-5/12'>
                                <Image src={image} alt={image_alt} className={style} height={100} width={100}/>
                            </a>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PastEvent
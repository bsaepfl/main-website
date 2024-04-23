import React from "react"
import edulogo from '../images/edulogo.webp'
import telegram from '../images/telegram.webp'
import github from '../images/github.webp'
import discord from '../images/discord.webp'
import solidity from '../images/solidity.png'
import Image from "next/image"

const Background = () => {
    return(
        <div className='flex flex-col w-full h-full bg-dark-100 pb-32'>
            <div className='flex flex-col lg:flex-row text-centre items-center justify-around gap-10 lg:gap-0 pt-20 w-full px-0 xl:px-10 2xl:px-20'>
                <Image alt="education logo" className='pt-10' src= {edulogo}></Image>
                <div className='w-[90%] sm:w-[75%] md:w-[60%] lg:w-[40%] max-w-[500px] flex flex-col text-center gap-6'>
                    <div className='font-black text-4xl xl:text-7xl bg-clip-text bg-gradient-to-r from-dark-200 to-dark-600 text-transparent'>
                        EDUCATION
                    </div>
                    <div className='font-medium sm:text-lg text-gray-400 '>
                    We want to help everyone within the EPFL community who want to expand their knowledge in all Blockchain related subjects
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center py-20 w-full'>
                <button onClick={(e) => {e.preventDefault();
                        window.open('https://github.com/bsaepfl', '_blank');
                        }} className=" flex flex-col lg:ml-56 p-6 bg-[#021741] w-5/6 md:w-1/2 text-center items-center rounded-lg  hover:scale-105 duration-500">
                    <div className='flex flex-row items-center'>
                        <Image alt="github" className='w-24 pr-6' src = {github}></Image> 
                        <div className='text-gray-300 text-2xl lg:text-5xl font-semibold font-Montserrat'>Our Github</div>
                    </div>
                    <div className='text-gray-300 pt-3'>The GitHub page of our association is full of ressources for you to get started or learn more about the amazing technology that is the Blockchain.</div>
                </button>
                <div className='w-0 h-16 border border-dashed border-dark-600'>
                </div>
                <button onClick={(e) => {e.preventDefault();
                        window.open('https://t.me/+Yg2GqxoXDIIwYWJk', '_blank');
                        }} className=" flex flex-col lg:mr-56  p-6 w-5/6 md:w-1/2 bg-[#021741] text-center items-center rounded-lg  hover:scale-105 duration-500">
                    <div className='flex flex-row items-center'>
                            <div className='text-gray-300 text-2xl lg:text-5xl font-semibold'>Telegram Channel</div>
                            <Image alt="telegram" className='w-20 pl-4' src = {telegram}></Image> 
                    </div>
                    <div className='text-gray-300 pt-3 '>Here you will find all the information about our upcoming events and articles about news in the DeFi and crypto space</div>
                </button>
                <div className='w-0 h-16 border border-dashed border-dark-600'>
                </div>
                <button onClick={(e) => {e.preventDefault();
                        window.open('https://discord.gg/AXTqydWR', '_blank');
                        }} className=" flex flex-col lg:ml-56  p-6 w-5/6 md:w-1/2 bg-[#021741] text-center items-center rounded-lg  hover:scale-105 duration-500">
                    <div className='flex flex-row items-center'>
                            <Image alt="discord" className='w-24 pr-4' src = {discord}></Image> 
                            <div className='text-gray-300 text-2xl lg:text-5xl font-semibold'>Discord Channel</div>
                    </div>
                    <div className='text-gray-300 pt-3 '> Join the Discord Channel to communicate with us and learn more about the future projects of the Blockchani Student Association </div>
                </button>
                <div className='w-0 h-16 border border-dashed border-dark-600'>
                </div>
                <button onClick={(e) => {e.preventDefault();
                        window.open('/events', '_blank');
                        }} className=" flex flex-col lg:mr-56  p-6 w-5/6 md:w-1/2 bg-[#021741] text-center items-center rounded-lg  hover:scale-105 duration-500">
                    <div className='flex flex-row items-center'>    
                        <div className='text-gray-300 text-2xl lg:text-5xl font-semibold'>Solidity Crash Course</div>
                        <Image alt="soligity" className='pl-6 w-16' src = {solidity}></Image>
                    </div>
                    <div className='text-gray-300 pt-3 '>The official Solidity Crash Course page brought to you by the EPFL Blockchain Student Association.</div>
                </button>
            </div>
        </div>
    )
}


export default Background;
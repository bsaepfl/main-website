import React from "react"
import Ondefy from "../images/startups/OnDefy.png"
import Ondefy_black from "../images/startups/OnDefy_black.png"
import HoneyFinance from "../images/startups/HoneyFinance.jpeg"
import APWine from "../images/startups/APWine.png"
import Crypties from "../images/startups/Crypties.png"
import Image from "next/image"

const Startups = () => {
    return (
        <div className="bg-dark-100 flex flex-col items-center py-36 font-semibold w-full gap-16 justify-center">
            <div className="w-7/12 text-center  mt-10 md:mt-0 items-center flex flex-col gap-2">
                <span className="font-bold text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-dark-200 dark:to-orange-600 to-orange-600 text-transparent">
                    Our Sponsors:
                </span>
                <span className="dark:text-gray-200 w-12/12 sm:8/12 xl:w-6/12  font-light text-xs md:text-sm lg:text-base ">
                    Sponsoring is a huge part of BSA. As an association we work closely with actors of the blockchain space to help them/us to realise their/our goals. Creating synergies between builders of the ecosystem is essential for us.
                </span>
                <div className="h-1 bg-gradient-to-r from-dark-200 dark:to-orange-600 to-orange-600 w-5/12 "/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 w-7/12 items-center justify-items-center">
                <a
                    href="https://apwine.fi"
                    target="_blank"
                    className=" justify-center flex hover:scale-110 duration-300">
                    <Image className="w-full" src={APWine} alt="apw" width={200} height={100}/>
                </a>
                <a
                    href="https://ondefy.com"
                    target="_blank"
                    className="  justify-center flex hover:scale-110 duration-300">
                    <Image className="w-64 dark:hidden" src={Ondefy_black} alt="ondefy_black" width={100} height={100}/>
                    <Image className="w-64 hidden dark:block" src={Ondefy} alt="ondefy" width={100} height={100}/>
                </a>
     
                <a
                    href="https://y.at/%F0%9F%8D%AF%F0%9F%8D%AF%F0%9F%90%9D"
                    target="_blank"
                    className=" gap-2 justify-center items-center flex hover:scale-110 duration-300">
                    <Image className="w-3/12 rounded-full" src={HoneyFinance} alt="honeyfinance" width={100} height={100}/>
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-4xl dark:text-white font-semibold">HoneyLabs</span>
                </a>
                <a
                    href="https://crypties.ch"
                    target="_blank"
                    className="  justify-center flex hover:scale-110 duration-300">
                    <Image className="w-64 " src={Crypties} alt="Crypties" width={100} height={100}/>
                </a>
            </div>



            <div className="w-7/12 text-center mt-40">
                <span className="font-bold text-xs text-gray-500">
                    If you feel interested in sponsoring the association, please contact us at bsa@epfl.ch
                </span>
            </div>
        </div>
    )
}

export default Startups;
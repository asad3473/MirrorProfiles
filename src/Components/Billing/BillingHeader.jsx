import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GiStripedSun } from "react-icons/gi";
import CardData from './CardData';
export default function BillingHeader() {
    return (
        <div className=' flex flex-wrap' >
            <div
                className="relative px-3 text-white sm:px-10 bg-[#000000] h-auto sm:py-5 w-full sm:w-5/12 flex flex-col justify-between"
                style={{
                    backgroundImage: `
      linear-gradient(#0F2927,#203A43,#0f2027)
    `,
                }}
            >
             
                <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] sm:mt-10 py-3">
                    <Link to="/">
                        <img src="/accountimage/logo.png" alt="missing" className="w-full h-auto" />
                    </Link>
                </div>

         
                <div className="mt-4 sm:mt-6">
                    <h1 className="text-xl sm:text-3xl font-semibold">
                        Welcome to MirrorProfile's customer portal!
                    </h1>
                    <div className="sm:mt-11 text-md mt-4 flex gap-2 items-center flex-wrap">
                        <FaArrowLeft />
                        <Link to="/">
                            <span>Return to MirrorProfiles (Stepward SAS)</span>
                        </Link>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10 sm:mt-0">
                    <div className="w-full sm:w-6/12 mb-4 sm:mb-0">
                        <p className="text-gray-400">
                            Powered by <b className="text-white text-lg">stripe</b>
                        </p>
                        <p className="text-gray-400">Learn more about Stripe Billing</p>
                        <div className="flex gap-3 text-sm sm:text-base">
                            <span>Term</span>
                            <span>Privacy</span>
                        </div>
                    </div>

                    <div className="sm:w-4/12 hidden sm:flex justify-center sm:justify-end items-center">
                        <GiStripedSun className="text-[#e9f4f82d]" fontSize={80} />
                    </div>
                </div>
            </div>


            {/* right side card data */}
            <div className='w-full sm:w-7/12'>
                <CardData />
            </div>
        </div >
    )
}

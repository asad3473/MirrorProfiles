import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { MdNoteAlt } from "react-icons/md";
import { FaArrowCircleLeft, FaPlus, FaSearch } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";

export default function CardData() {
    const [searchTerm, setSearchTerm] = useState("");

    const aray = [
        { date: '4 Aug 2025', price: '€169.81', stats: 'Paid', web: 'MirrorPro...' },
        { date: '4 Aug 2025', price: '€0.00', stats: 'Paid', web: 'MirrorPro...' },
        { date: '1 Aug 2025', price: '€170.00', stats: 'Paid', web: 'MirrorPro...' },
    ];

    // filter logic
    const filteredData = aray.filter(item =>
        Object.values(item).some(val =>
            val.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const [open, Setclose] = useState(false)
    const Box = () => {
        Setclose(!open)
    }
    return (
        <div className=' px-2 py-5'>
            <div className=' w-full sm:w-11/12 mx-auto '>
                <h1 className=' sm:text-2xl font-semibold mb-3'>Payment method</h1>
                <hr className=' h-1 bg-[#0f292739] border-0' />

                <div className=' flex justify-between items-center mt-6'>
                    <div className=' text-nowrap flex items-center gap-2 sm:w-4/12 w-full'>
                        <span><FaCcStripe fontSize={20} /></span>
                        <span>Mastercard •••• 3567</span>
                    </div>
                    <div className=' flex  w-full sm:w-4/12 items-center justify-around'>
                        <p className=' text-gray-500 flex gap-1 items-center'><FaArrowCircleLeft className='20' /> link</p>
                        <div className=' relative hover:shadow-[#b9b9b9] shadow shadow-[#d4cbcb4a] border py-1 border-[#d4cbcb4a] px-2'>
                            <BsThreeDots onClick={Box} />
                            {
                                open && (
                                    <div className=' flex flex-col gap-1 py-2 px-2 absolute -left-20 -bottom-19 bg-white shadow-lg rounded-md'>
                                        <span className=' text-nowrap'>Make default</span>
                                        <span className='text-red-600'>Delete</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className=' text-gray-500 flex gap-2 items-center mt-5'>
                    <FaPlus />
                    <p>Add payment method</p>
                </div>

                <h1 className=' mt-5 sm:text-xl  mb-3'>Billing information</h1>
                <hr className=' h-1 bg-[#0f292739] border-0' />

                <div className=' mt-2'>
                    <div className=' flex gap-24 mt-3'>
                        <span className=' text-gray-500'>Name</span>
                        <span>Charles Newson</span>
                    </div>

                    <div className=' flex gap-25 mt-3'>
                        <span className=' text-gray-500'>Email</span>
                        <span>charles@newson.io</span>
                    </div>
                    <div className=' flex gap-10 mt-3'>
                        <span className=' text-gray-500'>Billing address</span>
                        <span>NN14 1SQGB</span>
                    </div>
                </div>
                <div className=' flex items-center gap-2 text-gray-500 hover:text-black w-full cursor-pointer sm:w-5/12 mt-2'>
                    <MdNoteAlt />
                    <span>Update information</span>
                </div>

                <div className=' flex items-center justify-between mt-5 mb-2'>
                    <h1 className='sm:text-xl'>Invoice history</h1>
                    <span className='flex gap-1 items-center'>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='shadow outline-0  py-2 border border-[#313a3a44] px-2 rounded-md'
                            placeholder='filter invoices'
                        />
                        <span className='py-2 px-2 shadow'><FaSearch /></span>
                    </span>
                </div>
                <hr className=' h-1 bg-[#0f292739] border-0' />

                <div className=' w-full mt-3'>
                    {
                        filteredData.map((val, index) => (
                            <div className=' flex justify-between gap-2 items-center mb-2 w-full' key={index}>
                                <span>{val.date}</span>
                                <span>{val.price}</span>
                                <button className=' py-1 px-2 text-center rounded-md bg-[#72918e4c]'>{val.stats}</button>
                                <span>{val.web}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

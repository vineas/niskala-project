import Link from 'next/link'
import React from 'react'
import portofolioData from '../../data/data.json'
import { motion } from "framer-motion"


const Portofolio = () => {
    return (
        <div id='portofolio' className='py-20 bg-white w-11/12 md:container mx-auto px-14'>
            <div className="mb-12">
                <h3 className='text-3xl md:text-5xl font-bold text-center mb-3'>Portofolio</h3>
                <p className='text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 w-11/12 md:container mx-auto gap-8'>
                {portofolioData.map((item, index) => (
                    <div className='shadow-2xl rounded-xl' key={index}>
                        <Link href={item.link}>
                            <img src={item.image} alt={item.title} className='rounded-t-lg w-full'/>
                            <div className='py-3 px-5'>
                                <h4 className='text-center font-bold'>{item.title}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portofolio

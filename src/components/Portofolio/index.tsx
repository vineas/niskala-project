import Link from 'next/link'
import React from 'react'

const Portofolio = () => {
    return (
        <div id='portofolio' className='py-20 bg-white'>
            <div className="mb-12">
                <h3 className='text-5xl font-bold text-center mb-3'>Portofolio</h3>
                <p className='text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8'>
                {/* portofolio card 1 */}
                <div className='shadow-xl'>
                    <Link href={"https://www.instagram.com/niskalastudios.id/reels/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Video Tahunan Sekolah SMK GARUDA NUSANTARA</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 2 */}
                <div className='shadow-xl'>
                    <Link href={"https://www.instagram.com/reel/C7WwutUSUrC/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Video Tahunan Sekolah SMK ISLAM AL - AMIN</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 3 */}
                <div className='shadow-xl'>
                    <Link href={"https://www.instagram.com/reel/C9pQlXuyz4l/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>Video Tahunan Sekolah SMK Sentra Medika</h4>
                        </div>
                    </Link>
                </div>
                {/* portofolio card 4 */}
                <div className='shadow-xl'>
                    <Link href={"https://www.instagram.com/reel/C8gIaUiMVus/"}>
                        <img src="https://placehold.co/600x400" className='w-full' />

                        <div className='py-3 px-5'>
                            <h4 className='text-center font-bold'>P5 : THE LOCAL HERITAGE</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
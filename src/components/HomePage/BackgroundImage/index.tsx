import NavBar from "@/components/NavBar"
import Image from 'next/image';
import styles from './BackgroundImage.module.css';

const MainPage = () => {
    return (
        <>
            <div className={styles.background}>
                <NavBar />
                <div className="flex flex-col justify-center items-center" style={{ height: 'calc(100vh - 60px)' }}>
                    <div>
                        <h1 className="text-center text-white text-4xl md:text-5xl font-bold">
                            Abadikan Momenmu
                        </h1>
                    </div>
                    <div className="text-center mt-3 px-20">
                        <p className="text-white text-lg">
                        Abadikan momen berharga bersama Niskala Studio, rasakan pengalaman istimewa, dan ciptakan kenangan tak terlupakan buat setiap detik jadi berarti 
                        </p>
                    </div>
                    <div className="text-center mt-5 px-20">
                        <button className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-16 border-b-4 border-black hover:border-black rounded-full">
                            Free Konsultasi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
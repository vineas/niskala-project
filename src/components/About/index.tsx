import NavBar from "@/components/NavBar"
import Image from 'next/image';
import styles from '../../../src/components/About/About.module.css';
import TeamFoto from '../../../src/assets/img/team.jpg';

const About = () => {
    return (
        <>
            {/* <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>About</h1>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia earum asperiores fuga atque numquam sit nulla tempora, ex dicta similique illo aliquam? Excepturi quae blanditiis quisquam! Corrupti earum repudiandae laudantium iste, reprehenderit pariatur voluptatibus?
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={TeamFoto}
                        alt="Team"
                        className={styles.image}
                    />
                </div>
            </div> */}

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <Image
                            src={TeamFoto}
                            className="h-28 w-full object-cover md:h-full md:w-28"
                            alt="Modern building architecture" 
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
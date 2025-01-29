"use client"
import Image from "next/image";
import { useInView } from '@/app/hooks/useInView';

const Dedicated = () => {
    const [containerRef, isInView] = useInView();

    return (
        <section ref={containerRef as React.RefObject<HTMLElement>}>
            <Image 
                src="/images/dedicated/spiral.svg" 
                height={272} 
                width={686} 
                alt="spiral-design" 
                className={`absolute left-0 hidden lg:block -z-10 ${isInView ? 'animate-pulse' : ''}`} 
            />
            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>
                    <div className={`${isInView ? 'animate-slideFromLeft' : 'opacity-0'}`}>
                        <Image 
                            src="/images/dedicated/man.svg" 
                            alt="man-icon" 
                            width={530} 
                            height={530} 
                            className="mx-auto md:mx-2 transition-transform duration-300 hover:scale-105" 
                        />
                    </div>
                    <div className={`relative ${isInView ? 'animate-slideFromRight' : 'opacity-0'}`}>
                        <Image 
                            src="images/dedicated/comma.svg" 
                            alt="comma-image" 
                            width={200} 
                            height={106} 
                            className={`absolute comma-pos hidden lg:block ${isInView ? 'animate-pulse' : ''}`} 
                        />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
                            Dedicated to Meeting Your Cleaning Needs
                        </h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                            We tailor our services to fit your lifestyle and preferences, ensuring every space feels just right. Experience seamless cleanliness and personalized care from a team that puts your satisfaction first.
                        </p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
                            Isabela Prado, CEO
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dedicated;

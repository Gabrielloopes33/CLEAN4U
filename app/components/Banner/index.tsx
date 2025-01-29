import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8 animate-fadeIn'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start animate-slideFromLeft'>
                        <button className='text-blue bg-lightblue text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider 
                            transition-all duration-300 ease-in-out
                            hover:text-white hover:bg-black hover:scale-105 hover:shadow-lg
                            active:scale-95'>
                            Sparkling Clean, Every Time!
                        </button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple
                            animate-slideFromBottom'>
                            Your Cleaning<br /> Experts <br /> in Boca Raton!
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start animate-slideFromBottom' style={{ animationDelay: '200ms' }}>
                        <button className='text-sm md:text-xl font-semibold bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full 
                            transition-all duration-300 ease-in-out
                            hover:bg-hoblue hover:scale-105 hover:shadow-xl
                            active:scale-95'>
                            Book Your Cleaning
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block animate-floatingImage'>
                    <Image 
                        src="/images/banner/banner.svg" 
                        alt="hero-image" 
                        width={800} 
                        height={642}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>

            </div>
        </div>
    )
}

export default Banner;

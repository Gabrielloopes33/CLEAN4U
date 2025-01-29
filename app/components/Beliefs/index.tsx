"use client"
import { useInView } from '@/app/hooks/useInView';

const Beliefs = () => {
    const [containerRef, isInView] = useInView();

    return (
        <section ref={containerRef as React.RefObject<HTMLElement>}>
            <div className='mx-auto max-w-3xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                    {/* COLUMN-1 */}

                    <div className={`bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl transition-all duration-300 hover:scale-105
                        ${isInView ? 'animate-slideFromLeft' : 'opacity-0'}`}>
                        <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">Special Offers:</h2>
                        <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">First-time  <span className="text-grey">customer discount: Enjoy 10% off your first service.</span></h3>
                    
                        <div className="text-center sm:text-start">
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                                Book Your Cleaning
                            </button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div className={`bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl transition-all duration-300 hover:scale-105
                        ${isInView ? 'animate-slideFromRight' : 'opacity-0'}`}>
                        <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">Special Offers:</h2>
                        <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Referral program</span> Get rewarded when you refer friends or family.</h3>
                       
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                                Book Your Cleaning
                            </button>
                    </div>

                    

                </div>
            </div>
        </section>
    )
}

export default Beliefs;

const Beliefs = () => {
    return (
        <div className='mx-auto max-w-3xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-1 my-16 mx-5 gap-5'>

                {/* COLUMN-2 */}
                <div className="bg-build pt-12 px-10 sm:px-24 pb-20 md:pb-32 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">Our Promise to You</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-12 text-center sm:text-start">
                        <span className="text-blue">From residential to commercial spaces,</span> Clean 4 U is committed to making your life easier with top-notch cleaning solutions.
                    </h3>
                   
                    <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-5 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        Book Your Cleaning
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Beliefs;

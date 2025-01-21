import Image from "next/image";
import Link from "next/link";


interface datatype {
    heading: string;

    paragraph: string;

}

const Aboutdata: datatype[] = [
    {
        heading: "Customer-Centric Approach",
        paragraph: 'Your satisfaction is our top priority. We listen to your needs and go above and beyond to deliver the results you deserve.',
    },
    {
        heading: "Experienced Team",
        paragraph: 'Our highly trained, fully vetted cleaning professionals are dedicated to excellence and ensuring your peace of mind.',
    },
    {
        heading: "Eco-Friendly Practices",
        paragraph: ' We care for your space and the planet. That’s why we use non-toxic, environmentally friendly products in all our services.',

    },
    {
        heading: "Flexible Services",
        paragraph: ' Whether you need a one-time deep clean or regular maintenance, we’ll create a plan that works perfectly for you.',

    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>What Sets Us Apart:</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 gap-x-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group text-center'>
                            <h4 className='text-3xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            
                            <h4 className='text-base font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
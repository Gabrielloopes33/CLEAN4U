"use client"
import Slider from "react-slick";
import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useInView } from '@/app/hooks/useInView';

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        profession: '',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: '',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: '',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Robert Fox",
        profession: '',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS

const MultipleItems = () => {
    const [containerRef, isInView] = useInView();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section ref={containerRef as React.RefObject<HTMLElement>}>
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                <div className={`text-center ${isInView ? 'animate-slideFromBottom' : 'opacity-0'}`}>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} className="relative">
                            <div className={`bg-white test-sha m-3 p-10 my-20 rounded-3xl transition-all duration-300 hover:scale-105
                                ${isInView ? 'animate-slideFromBottom' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 200}ms` }}>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                <hr style={{ color: "lightgrey" }} />
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                        <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                    </div>
                                    <div className="flex">
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default MultipleItems;

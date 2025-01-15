"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/wework/avatar4.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
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
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Our Commitment to Sustainability</h3>
                        <h5 className="text-4xl sm:text-6xl font-regular text-regular opacity-40  my-10">We are dedicated to eco-friendly practices, using non-toxic and biodegradable cleaning solutions to minimize environmental impact while ensuring your home remains safe for your loved ones.</h5>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">your home remains safe for your loved ones.</h3>
                    </div>

                </div>

                

            </div>

        );
    }
}

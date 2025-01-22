import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '#services-section' },
    { name: 'Free quote', href: '/quote' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Drawerdata = () => {
    return (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 block px-3 py-2 text-base font-medium rounded-md hover:text-black"
                >
                    {item.name}
                </Link>
            ))}
            {/* Contact Us Button */}
            <div className="mt-4 px-3">
                <button
                    onClick={() => document.getElementById('contact_modal')?.click()}
                    className="w-full text-center text-base font-medium bg-transparent py-2 border-2 border-blue text-blue rounded-full hover:bg-blue hover:text-white"
                >
                    Contact us
                </button>
            </div>
        </div>
    );
}

export default Drawerdata;

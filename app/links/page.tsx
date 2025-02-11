"use client"
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';

const links = [
    
    {
        title: "Visit Our Website",
        url: "/",
        bgColor: "bg-darkblue",
        hoverColor: "hover:bg-navyblue"
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/cleaning4you1",
        bgColor: "bg-[#E4405F]",
        hoverColor: "hover:bg-[#d1365d]"
    },
    {
        title: "WhatsApp",
        url: "https://wa.me/15614493627?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
        bgColor: "bg-[#25D366]",
        hoverColor: "hover:bg-[#20bd5a]"
    },
    {
        title: "iMessage / SMS",
        url: "sms:+15614493627&body=Olá,%20gostaria%20de%20mais%20informações.",
        bgColor: "bg-[#1877F2]",
        hoverColor: "hover:bg-[#0d64d8]"
    }
];

const LinksPage = () => {
    return (
        <>
            <AnimatedBackground />
            <div className="min-h-screen bg-white/90 p-4">
                <div className="max-w-md mx-auto pt-20 pb-12">
                    {/* Logo e Perfil */}
                    <div className="text-center mb-8">
                        <div className="relative w-24 h-24 mx-auto mb-4">
                        </div>
                        <h1 className="text-2xl font-bold text-blue mb-2">Clean 4 U</h1>
                        <p className="text-gray-600">Professional Cleaning Services in Boca Raton</p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        {links.map((link, index) => (
                            <Link 
                                href={link.url} 
                                key={index}
                                className={`block ${link.bgColor} ${link.hoverColor} text-white py-4 px-6 rounded-xl 
                                    text-center font-semibold transition-all duration-300 
                                    transform hover:scale-105 hover:shadow-lg backdrop-blur-sm`}
                                target={link.url.startsWith('http') ? '_blank' : '_self'}
                                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Clean 4 U. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinksPage; 
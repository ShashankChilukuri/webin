import React, { useState } from 'react';
import logo from './Images/a1.png'; 

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white text-gray-700 shadow-lg w-full fixed top-0 left-0 z-10">
            <div className="container mx-auto flex justify-between items-center py-1">
                <div className="flex items-center bg-transparent rounded-lg p-1 transition-transform duration-300 hover:scale-105">
                    <img
                        className="h-14 transition-opacity duration-300 hover:opacity-80"
                        src={logo}
                        alt="WebIn Logo"
                    />
                    <div className="ml-3">
                        <span className="text-5xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-800">WebIn</span>
                        <p className="text-lg text-gray-600">Weaving the Future of the Web</p>
                    </div>
                </div>

                
                <div className="hidden md:flex flex-1 justify-center space-x-8">
                    <a href="#home" className="hover:text-orange-400 transition duration-300 text-xl">Home</a>
                    <a href="#services" className="hover:text-orange-400 transition duration-300 text-xl">Services</a>
                    <a href="#about" className="hover:text-orange-400 transition duration-300 text-xl">About Us</a>
                    <a href="#pricing" className="hover:text-orange-400 transition duration-300 text-xl">Pricing</a>
                    <a href="#contact" className="hover:text-orange-400 transition duration-300 text-xl">Contact Us</a>
                </div>

                
                <div className="md:hidden">
                    <button 
                        onClick={toggleMobileMenu} 
                        className="text-gray-700 focus:outline-none" 
                        aria-label="Toggle mobile menu"
                        title="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 py-4">
                    <button 
                        onClick={toggleMobileMenu} 
                        className="text-gray-400 hover:text-gray-200 focus:outline-none absolute top-2 right-4"
                        aria-label="Close mobile menu"
                        title="Close"
                    >
                        &times; 
                    </button>
                    <a href="#home" className="block text-center hover:text-orange-400 transition duration-300 text-xl py-2">Home</a>
                    <a href="#services" className="block text-center hover:text-orange-400 transition duration-300 text-xl py-2">Services</a>
                    <a href="#about" className="block text-center hover:text-orange-400 transition duration-300 text-xl py-2">About Us</a>
                    <a href="#pricing" className="block text-center hover:text-orange-400 transition duration-300 text-xl py-2">Pricing</a>
                    <a href="#contact" className="block text-center hover:text-orange-400 transition duration-300 text-xl py-2">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import logo from './Images/a1.png';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the drawer if it is open
        if (isDrawerOpen) {
            toggleDrawer();
        }
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 transition-shadow duration-300 ease-in-out">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4 hover:rotate-6 transition-transform duration-300">
                    <img className="h-14" src={logo} alt="WebIn Logo" />
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-blue-600">WebIn</h1>
                        <p className="text-sm text-gray-600">Weaving the Future of the Web</p>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
                    {['Home', 'Services', 'About', 'Pricing', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScroll(e, item.toLowerCase())}
                            className="text-lg font-medium text-gray-700 hover:text-orange-500 hover:underline transition duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="hidden md:block">
                    <a
                        href="#services"
                        onClick={(e) => handleScroll(e, 'services')}
                        className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition duration-300 shadow-md"
                    >
                        
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle side menu"
                        title="Menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Side Drawer for Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                    isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    onClick={toggleDrawer}
                    className="text-gray-400 hover:text-gray-200 focus:outline-none absolute top-4 right-4"
                    aria-label="Close side menu"
                    title="Close"
                >
                    &times;
                </button>
                <div className="mt-16 space-y-8 px-6">
                    {['Home', 'Services', 'About', 'Pricing', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScroll(e, item.toLowerCase())}
                            className="block text-xl text-white hover:text-orange-400 transition duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

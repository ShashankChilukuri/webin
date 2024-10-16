import React from 'react';
import { Helmet } from 'react-helmet';
import './Css/Main.css';
import './Css/Homebg.css';
import Navbar from './Navbar';
import Pricing from './Pricing';
import main from './Images/maintainence.jpeg';
import deploy from './Images/deployment.png';
import web from './Images/web_development.jpeg';
import developmentHome from './Images/d4.jpg';
import ContactForm from './contactform';

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>Webin - Weaving the Future of the Web</title>
                <meta name="description" content="Welcome to WebIn, a freelancing platform for web development, deployment, and maintenance services." />
                <meta name="keywords" content="web development, website deployment, website maintenance, freelancing" />
                <link rel="canonical" href="https://www.webin.in.net" />
            </Helmet>

            <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg w-full fixed top-0 left-0 z-10">
                <Navbar />
            </nav>

            <div className="main-content pt-24" aria-label="Main Content" role="main">
            <section id="home" className="area py-5 bg-blue-500">
                    <div className="overlay"></div> 
                    <div className="context">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 text-center">
                                <h1 className="text-white mb-4 text-4xl animated-text">Welcome to WebIn</h1> 
                                <p className="text-white text-lg mb-4">Your gateway to innovative web solutions</p> 
                                <div className="button-container d-flex justify-content-center">
                                    
                                    <a href="#about" className="btn btn-lg btn-primary ">Learn More</a> 
                                </div>
                            </div>
                            <div className="col-12 col-md-6 image-container d-flex justify-content-center align-items-center"> 
                                <img src={developmentHome} alt="A graphic representing web development" className="img-fluid full-width-image" />
                              
                            </div>
                        </div>
                    </div>
                    <div className="circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </section>

                </div>

            <section id="services" className="py-5 bg-gray-50">
                <div className="container">
                    <h2 className="text-center text-purple-700 mb-4 text-4xl font-bold">Our Services</h2>
                    <div className="row">
                        {/* Web Development Service */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="info-banner-back-content-inner bg-white shadow-lg rounded-lg p-4">
                                <img src={web} alt="Web Development Services" className="img-fluid mb-3" />
                                <h3 className="card-title text-purple-700">Web Development</h3>
                                <p className="card-text text-gray-700">
                                    Our web development services focus on creating user-friendly, responsive, and visually appealing websites.
                                    We utilize modern technologies and frameworks to ensure that your site not only looks great but also performs optimally.
                                </p>
                                <ul className="list-unstyled text-gray-700">
                                    <li>Custom Website Design</li>
                                    <li>Responsive Web Development</li>
                                    <li>Content Management Systems</li>
                                </ul>
                            </div>
                        </div>

                        {/* Website Deployment Service */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="info-banner-back-content-inner bg-white shadow-lg rounded-lg p-4">
                                <img src={deploy} alt="Website Deployment Services" className="img-fluid mb-3" />
                                <h3 className="card-title text-purple-700">Website Deployment</h3>
                                <p className="card-text text-gray-700">
                                    We provide seamless website deployment services to ensure your site goes live without any hiccups.
                                    Our team manages the entire deployment process, from setting up hosting environments to transferring files and configuring servers.
                                </p>
                                <ul className="list-unstyled text-gray-700">
                                    <li>Hosting Setup and Management</li>
                                    <li>Domain Registration Assistance</li>
                                    <li>Site Launch and Testing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Website Maintenance Service */}
                        <div className="col-12 col-md-4 mb-4">
                            <div className="info-banner-back-content-inner bg-white shadow-lg rounded-lg p-4">
                                <img src={main} alt="Website Maintenance Services" className="img-fluid mb-3" />
                                <h3 className="card-title text-purple-700">Website Maintenance</h3>
                                <p className="card-text text-gray-700">
                                    Our website maintenance services ensure that your site remains up-to-date, secure, and fully functional.
                                    We offer regular updates, backups, and security checks to prevent issues and improve performance.
                                </p>
                                <ul className="list-unstyled text-gray-700">
                                    <li>Performance Monitoring</li>
                                    <li>Security Audits and Backups</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-5 bg-gradient-to-b from-blue-100 to-white">
                <div className="container">
                    <Pricing />
                </div>
            </section>

            <section id="about" className="bg-white py-5">
                <div className="container mx-auto mt-8">
                    <h2 className="text-center text-purple-700 mb-4 text-4xl font-bold">About Us</h2>
                    <p className="text-center mb-6 text-gray-700">
                        At WebIn, we are a passionate team dedicated to creating outstanding web solutions tailored to your unique needs. 
                        Our mission is to empower businesses with effective online presences through innovative web development strategies.
                    </p>
                    <p className="lead text-center mb-6 text-gray-700">
                        We specialize in weaving together innovative web solutions that cater to diverse business needs. 
                        Our dedicated team of experts is committed to helping you navigate the digital landscape with confidence and creativity.
                    </p>

                    <h3 className="text-center text-purple-700 mb-4 text-3xl font-semibold">Our Vision</h3>
                    <p className="text-center mb-4 text-gray-700">
                        Our vision is to be a leading web development agency recognized for our creativity, expertise, and commitment to delivering exceptional results. 
                        We strive to exceed our clients’ expectations and help them achieve their business goals through reliable and effective solutions.
                    </p>

                    <h3 className="text-center text-purple-700 mb-4 text-3xl font-semibold">Our Core Values</h3>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                        <li className="mb-2"><strong>Innovation:</strong> We believe in pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</li>
                        <li className="mb-2"><strong>Integrity:</strong> We maintain transparency and honesty in all our dealings, ensuring trust and reliability.</li>
                        <li className="mb-2"><strong>Collaboration:</strong> We work closely with our clients, valuing their input and fostering a collaborative environment.</li>
                        <li className="mb-2"><strong>Excellence:</strong> We are committed to delivering the highest quality of work, continuously improving our skills and processes.</li>
                    </ul>

                    <h3 className="text-center text-purple-700 mb-4 text-3xl font-semibold">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-center">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">C Shashank</h4>
                            <p>Developer and Manager</p>
                            <p className="text-sm text-gray-600">C Shashank is a visionary leader with a knack for creating efficient solutions and managing teams effectively.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">Harshith</h4>
                            <p>Full Stack Developer</p>
                            <p className="text-sm text-gray-600">Harshith is a creative full-stack developer passionate about building seamless user experiences.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">Dushyanth</h4>
                            <p>Backend Developer</p>
                            <p className="text-sm text-gray-600">Dushyanth specializes in building robust backend systems and ensuring smooth integrations.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">Advith</h4>
                            <p>Frontend Developer and Cloud Architect</p>
                            <p className="text-sm text-gray-600">Advith combines creativity with technical expertise to create stunning frontend interfaces.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">Koushik</h4>
                            <p>Frontend Developer</p>
                            <p className="text-sm text-gray-600">Koushik is dedicated to delivering high-quality frontend solutions with a focus on usability.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-bold">Aditya</h4>
                            <p>Backend Developer</p>
                            <p className="text-sm text-gray-600">Aditya excels at creating efficient backend solutions that power our web applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-5 bg-gray-50">
                <div className="container">
                    <h2 className="text-center text-purple-700 mb-4 text-4xl font-bold">Contact Us</h2>
                    <p className="text-center mb-4 text-gray-700">We’d love to hear from you! Please fill out the form below to get in touch with us.</p>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Main;

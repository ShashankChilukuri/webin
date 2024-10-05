import React from 'react';
import Slider from 'react-slick';
import './Css/Main.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pricing = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Pricing Plans</h2>
            <p className="text-center mb-4">Choose the best plan that suits your needs.</p>
            <Slider {...settings}>
                
                <div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Basic Static Plan</h5>
                            <p className="card-text">Perfect for small projects.</p>
                            <h3 className="text-primary">₹ 2,999</h3>
                            <ul className="list-unstyled">
                                <li>3 Pages Static Website</li>
                                <li>Lifetime 24/7 Free Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Premium Static Plan</h5>
                            <p className="card-text">For advanced projects.</p>
                            <h3 className="text-primary">₹ 5,999</h3>
                            <ul className="list-unstyled">
                                <li>10 Pages Static Website</li>
                                <li>Lifetime 24/7 Free Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Basic Dynamic Plan</h5>
                            <p className="card-text">Great for startups.</p>
                            <h3 className="text-primary">₹ 8,999</h3>
                            <ul className="list-unstyled">
                                <li>3 Pages Dynamic Website</li>
                                <li>1 Year Free Domain Name</li>
                                <li>Lifetime 24/7 Free Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Premium Dynamic Plan</h5>
                            <p className="card-text">For established businesses.</p>
                            <h3 className="text-primary">₹ 17,999</h3>
                            <ul className="list-unstyled">
                                <li>10 Pages Dynamic Website</li>
                                <li>1 Year Free Domain Name</li>
                                <li>Lifetime 24/7 Free Hosting Support</li>
                                <li>Unlimited Images & Videos Upload</li>
                                <li>Free SSL Certificates</li>
                                <li>Live Chat & Payment Gateway Integration</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>

            
            <div className="text-center mt-5">
                <p>If you don't find your requirements, <strong>get a quote</strong> by sending your requirements!</p>
                <button 
                    className="btn btn-primary" 
                    onClick={() => window.location.href = '/#contact'}
                >
                    Request a Quote
                </button>
            </div>
        </div>
    );
};

export default Pricing;

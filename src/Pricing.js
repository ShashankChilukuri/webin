import React from 'react';
import Slider from 'react-slick';
import './Css/Main.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pricing = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container py-5">
            <h2 className="text-center display-4 text-primary mb-4">Our Pricing Plans</h2>
            <p className="text-center lead mb-5">Choose a plan that perfectly fits your needs</p>
            <Slider {...settings}>
                <div>
                    <div className="card shadow-lg h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold">Basic Static Plan</h5>
                            <h3 className="text-primary font-weight-bold">₹ 2,999</h3>
                            <p className="card-text">Ideal for small businesses or personal projects.</p>
                            <ul className="list-unstyled my-3">
                                <li>3 Pages Static Website</li>
                                <li>Lifetime Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card shadow-lg h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold">Premium Static Plan</h5>
                            <h3 className="text-primary font-weight-bold">₹ 5,999</h3>
                            <p className="card-text">For advanced and larger projects needing more.</p>
                            <ul className="list-unstyled my-3">
                                <li>10 Pages Static Website</li>
                                <li>Lifetime Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card shadow-lg h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold">Basic Dynamic Plan</h5>
                            <h3 className="text-primary font-weight-bold">₹ 8,999</h3>
                            <p className="card-text">Perfect for startups with growing needs.</p>
                            <ul className="list-unstyled my-3">
                                <li>3 Pages Dynamic Website</li>
                                <li>1 Year Free Domain Name</li>
                                <li>Lifetime Hosting Support</li>
                                <li>Free SSL Certificates</li>
                                <li>SEO Friendly & Responsive</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card shadow-lg h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold">Premium Dynamic Plan</h5>
                            <h3 className="text-primary font-weight-bold">₹ 17,999</h3>
                            <p className="card-text">Best for businesses with higher demand.</p>
                            <ul className="list-unstyled my-3">
                                <li>10 Pages Dynamic Website</li>
                                <li>Unlimited Image & Video Uploads</li>
                                <li>1 Year Free Domain Name</li>
                                <li>Live Chat & Payment Integration</li>
                                <li>Free SSL Certificates</li>
                                <li>Inquiry Form</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className="text-center mt-5">
                <p>Need a custom solution? <strong>Contact us</strong> for a personalized quote!</p>
                <button 
                    className="btn btn-primary px-5 py-3" 
                    onClick={() => window.location.href = '/#contact'}
                >
                    Request a Quote
                </button>
            </div>
        </div>
    );
};

export default Pricing;

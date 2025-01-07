import React from 'react';
import Major from "../../assets/maj.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 
    sm:minh-[600px] sm:grid sm:place-items-center">
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="false">
                <img src={Major} 
                alt=""
                className="sm:scale-105 sm:-translate-x-11 
                max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
            </div>
            <div>
             <div className="space-y-5 sm:p-16 pb-6">
                <h1 data-aos="fade-down" className="text-3xl sm:text-4xl font bold font-serif">
                 About Us
                </h1>
                <p data-aos="fade-down">
                    Reliable Mafia SUV Car with affordable price.
                    Best SUV Cars.
                </p>

                <p data-aos="fade-down">
                    reliable cars in this website.
                    Affordable Prices.
                </p>
                <button data-aos="fade-down" className="button-outline">Get Started</button>
             </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default About;

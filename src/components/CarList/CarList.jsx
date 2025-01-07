import React from 'react';
import camper from "../../assets/camp1.png";
import major from "../../assets/maj.png";
import scorpio from "../../assets/scor.png";

const CarListData = [
    {
        name: "Camper ZX",
        price: 300,
        image: camper,
        aosDelay: "0",
    },
    {
        name: "Major",
        price: 200,
        image: major,
        aosDelay: "500",
    },
    {
        name: "Scorpio S11",
        price: 400,
        image: scorpio,
        aosDelay: "1000",
    },
];

const CarList = () => {
    return (
        <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/* heading */}
                <h1
                    data-aos="fade-down"
                    className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
                >
                    Jai Shree Ram
                </h1>
                <p data-aos="fade-up" className="text-sm pb-10">
                    Please choose your dream Mafia SUV Car and Book.
                </p>
                {/* Car Listing Cards */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                        {CarListData.map((data, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                            >
                                <div className="w-full h-[120px]">
                                    <img
                                        className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                                        src={data.image}
                                        alt={data.name}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-primary font-semibold">{data.name}</h1>
                                    <div className="flex justify-between items-center text-xl font-semibold">
                                        <p>₹{data.price}/Hour</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                                <p className="text-xl font-semibold absolute top-0 left-3">
                                    12km
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* end of car listing cards */}
                <div className="grid place-content-center mt-8">
                    <button data-aos="fade-up" className="button-outline">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarList;

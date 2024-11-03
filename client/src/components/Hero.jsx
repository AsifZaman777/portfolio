import React from 'react';
import Typewriter from 'typewriter-effect';
import asif from '../assets/images/asif.png';
import cv from '../assets/docs/Asif Zaman.pdf';

const Hero = () => {
    return (
        <div id="home" className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-16">
            {/* Left Section - Text */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Hello, Myself <span className="text-green-600">Asif Zaman</span>
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Having experience as
                    <span className="ml-2 font-bold text-2xl text-green-600">
                        <Typewriter
                            options={{
                                strings: [
                                    'Fullstack development',
                                    'Mobile app development',
                                    'AI & ML development',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h3>
                
                <p className="text-lg text-gray-600 mt-4 text-left">
                    Allows me to navigate various aspects of software development. "I bring a comprehensive approach to building scalable and efficient systems” refers to the diverse skill set implied by the listed designations.
                </p>

                {/* View CV Button */}
                <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
                >
                    Download CV
                </a>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/4 mt-8 md:mt-0 flex justify-center hover:scale-105 transition-all">
                <img
                    src={asif}
                    alt="Profile of Asif Zaman"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;

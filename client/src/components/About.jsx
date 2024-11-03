import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 text-neutral-900">
            <h1 className="max-w-3xl mb-10 mx-auto bg-gradient-to-br from-green-200 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                About Me
            </h1>

            {/* Summary */}
            <p className="text-lg mb-0 leading-relaxed text-left">
                I'm currently working as a <span className='text-green-600 font-bold'>Junior Software Engineer</span> at <span className='text-green-600 font-bold'>LankaBangla Securities PLC</span>.My duty is to develop complex real-time trading software and services using <span className='text-green-600 font-bold'>ASP.Net core</span> with optimized database integration. I have almost two years of experience
                in full-stack development using <span className='text-green-600 font-bold'>React.JS</span>, <span className='text-green-600 font-bold'>Node.Js</span>, and <span className='text-green-600 font-bold'>Express</span>. I’ve also developed mobile applications for iOS
                and Android for many startpus, an edtech startup focused on interactive learning. I am a machine learning enthusiast and have worked on various projects using <span className='text-green-600 font-bold'>Python</span> and <span className='text-green-600 font-bold'>Tensorflow</span>. Currently trying grasp
                more knowledge on <span className='text-green-600 font-bold'>AI</span> and <span className='text-green-600 font-bold'>ML</span> technologies.
                
            </p>

            {/* Work Experience */}
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <FaBriefcase className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Cloud Analogy</h3>
                        <h4 className="text-lg font-medium text-gray-600">Sr. Full Stack Developer</h4>
                        <p className="text-sm text-gray-400">Sep 2023 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                            <li>Design and establish user-friendly websites, including an optimized checkout page, resulting in a 25% increase in user clicks and 31% in customer purchases.</li>
                            <li>Provide adequate training to 45+ junior frontend and backend developers on internal functions, including steps for making minor updates/changes independently.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <FaBriefcase className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                        <p className="text-sm text-gray-400">Sep 2020 - Sep 2023</p>
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                            <li>Administered the full lifecycle of software development for 9 critical projects with 100% on-time delivery while staying 7% under budget.</li>
                            <li>Built and maintained backend REST services using Python or Node.js.</li>
                            <li>Collaborated closely with the design team and project managers to ensure efficient and timely delivery.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Education */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Bachelor of Technology (CSE)</h3>
                        <p className="text-gray-400">Integral University</p>
                        <p className="text-sm text-gray-400">July 2016 - June 2020</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Intermediate</h3>
                        <p className="text-gray-400">St Mary's</p>
                        <p className="text-sm text-gray-400">July 2015 - June 2016</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Secondary School</h3>
                        <p className="text-gray-400">St Mary's</p>
                        <p className="text-sm text-gray-400">July 2013 - June 2014</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

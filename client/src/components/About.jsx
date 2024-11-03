import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-8 py-16 text-neutral-900">
            {/* Summary */}
            <p className="text-lg mb-8 leading-relaxed">
                I am a seasoned Full Stack Developer with a proven track record of over 4+ years, focusing on delivering high-quality solutions. 
                My expertise lies in a comprehensive range of technologies including Python, Django, Flask, FastAPI, JavaScript, TypeScript, React, Next.js, Node.js, Express, GraphQL, AWS, GCP, and many more. 
                With a deep understanding of these tools and frameworks, I excel in crafting dynamic and scalable full-stack applications that meet the evolving needs of modern businesses. 
                Let me bring my wealth of experience and technical prowess to your next project.
            </p>

            {/* Work Experience */}
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <FaBriefcase className="text-purple-600 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold">Cloud Analogy</h3>
                        <h4 className="text-lg font-medium">Sr. Full Stack Developer</h4>
                        <p className="text-sm text-gray-400">Sep 2023 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                            <li>Design and establish user-friendly websites, including optimized checkout page, resulting in a 25% increase in user clicks and 31% in customer purchases.</li>
                            <li>Provide adequate training to 45+ junior frontend and backend developers in internal functions, including steps on how to make minor updates/changes independently.</li>
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

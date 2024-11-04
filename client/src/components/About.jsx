import React from "react";
import { FaBriefcase, FaGraduationCap, FaLock } from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiDotnet,
  SiGit,
  SiMicrosoftsqlserver,
  SiPostman,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import SkillCards from "./Shared/SkillCards";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 text-neutral-900">
      <h1 className="max-w-3xl mb-10 mx-auto bg-gradient-to-br from-green-200 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        About Me
      </h1>

      {/* Summary */}
      <p className="text-lg mb-5 leading-relaxed text-left">
        I'm currently working as a{" "}
        <span className="text-green-600 font-bold">
          Junior Software Engineer
        </span>{" "}
        at{" "}
        <span className="text-green-600 font-bold">
          LankaBangla Securities PLC
        </span>
        .My duty is to develop complex real-time trading software and services
        using <span className="text-green-600 font-bold">ASP.Net core</span>{" "}
        with optimized database integration. I have almost two years of
        experience in full-stack development using{" "}
        <span className="text-green-600 font-bold">React.JS</span>,{" "}
        <span className="text-green-600 font-bold">Node.Js</span>, and{" "}
        <span className="text-green-600 font-bold">Express</span>. I’ve also
        developed mobile applications for iOS and Android for many startpus, an
        edtech startup focused on interactive learning. I am a machine learning
        enthusiast and have worked on various projects using{" "}
        <span className="text-green-600 font-bold">Python</span> and{" "}
        <span className="text-green-600 font-bold">Tensorflow</span>. Currently
        trying grasp more knowledge on{" "}
        <span className="text-green-600 font-bold">AI</span> and{" "}
        <span className="text-green-600 font-bold">ML</span> technologies.
      </p>

      {/* Work Experience */}
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaBriefcase className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-xl font-bold text-green-600">
              <a href="https://lbsbd.com/">Lankabangla Securities PLC</a>
            </h3>
            <h4 className="text-lg font-medium text-gray-600">
              Junior Software Engineer, IT{" "}
            </h4>
            <p className="text-base text-neutral-600 mb-4">
              Oct 2024 - Present
            </p>
            <span className="font-semibold text-lg text-green-600">
              Responsibilities:
            </span>
            <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1 mb-4 ">
              <li className="hover:text-green-500 hover:scale-105 transition-all">
                Building stock market software solutions.
              </li>
              <li className="hover:text-green-500 hover:scale-105 transition-all">
                Collaborating with IT team to fix bugs and issues.
              </li>
              <li className="hover:text-green-500 hover:scale-105 transition-all">
                Developing real-time trading software.
              </li>
              <li className="hover:text-green-500 hover:scale-105 transition-all">
                Learn new technologies to implement AI models.
              </li>
            </ul>

            <span className="font-semibold text-lg text-green-600">
              Technical skills:
            </span>
{/* Frontend Skills */}
<div className="flex flex-col">
  <hr />
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
    <span className="text-lg font-medium text-green-600">Frontend:</span>
    <div className="grid grid-cols-2 gap-4 sm:flex">
      <SkillCards logo={<SiReact className="text-2xl " />} text="React" />
      <SkillCards logo={<SiAngular className="text-2xl" />} text="Angular" />
      <SkillCards logo={<SiTailwindcss className="text-2xl" />} text="Tailwind" />
      <SkillCards logo={<SiBootstrap className="text-2xl" />} text="Bootstrap" />
    </div>
  </div>
  <hr />
</div>

{/* Backend Skills */}
<div className="flex flex-col">
  <hr />
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
    <span className="text-lg font-medium text-green-600">Backend:</span>
    <div className="grid grid-cols-2 gap-4 sm:flex">
      <SkillCards logo={<SiDotnet className="text-2xl" />} text="ASP.net core" />
      <SkillCards logo={<SiDotnet className="text-2xl" />} text=".Net MVC" />
    </div>
  </div>
  <hr />
</div>

{/* Database Skills */}
<div className="flex flex-col">
  <hr />
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
    <span className="text-lg font-medium text-green-600">Database:</span>
    <div className="grid grid-cols-2 gap-4 sm:flex">
      <SkillCards logo={<SiSqlite className="text-2xl" />} text="SQLite" />
      <SkillCards logo={<SiMicrosoftsqlserver className="text-2xl" />} text="MSSQL" />
    </div>
  </div>
  <hr />
</div>

{/* Tools Skills */}
<div className="flex flex-col">
  <hr />
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
    <span className="text-lg font-medium text-green-600">Tools:</span>
    <div className="grid grid-cols-2 gap-4 sm:flex">
      <SkillCards logo={<SiPostman className="text-2xl" />} text="Postman" />
      <SkillCards logo={<SiGit className="text-2xl" />} text="Git" />
    </div>
  </div>
  <hr />
</div>

            
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaGraduationCap className="text-purple-600 text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Technology (CSE)
            </h3>
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

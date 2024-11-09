import React from "react";
import { FaBriefcase, FaGraduationCap, FaLock } from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiCanvas,
  SiDotnet,
  SiGit,
  SiMicrosoftsqlserver,
  SiP5Dotjs,
  SiPixiv,
  SiPostman,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";
import SkillCards from "./Shared/SkillCards";

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-8 text-neutral-900 mb-20">
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

      {/* Education */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaGraduationCap className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">
               BSc in Computer Science and Engineering
            </h3>
            <p className="text-gray-500 italic">American International University Bangladesh</p>
            <p className="text-sm text-gray-500">July 2020 - Sept 2023</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaGraduationCap className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Higher Secondary Certificate</h3>
            <p className="text-gray-500 italic">Mirpur Cantonment Public School and College</p>
            <p className="text-sm text-gray-500">July 2017 - Apr 2019</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaGraduationCap className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Secondary School Certificate</h3>
            <p className="text-gray-500 italic">Monipur High School and College</p>
            <p className="text-sm text-gray-500">Jan 2015 - Feb 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

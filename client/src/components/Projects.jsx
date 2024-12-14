import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "./Shared/ProjectCard";
import ProjectModal from "./ProjectModal"; // Import the ProjectModal component

// Images
import arcedemy from "../assets/images/arcedemy.png";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      image: arcedemy,
      carouselImages: [arcedemy, arcedemy, arcedemy, arcedemy, arcedemy, arcedemy, arcedemy], // Fixed spelling mistake here
      name: "Arcedemy",
      shortDesc: "Arcedemy is an online learning platform for the English medium students. The platform offers contents, live tests, and quizzes for the students.",
      longDesc: `
      <b>Project Overview:</b> 
      Arcedemy is a comprehensive online learning platform designed for students worldwide web and native app solution. With a vast array of courses and real-time interactive features, it fosters an engaging and effective learning environment. Students can access quizzes, live exams, past papers, and detailed study materials tailored to their needs.

      <br/><br/>
      <b>Key Features:</b>
      <ul>
      <li><b><u>Cross platform solution:</u></b> I have used a single server for both web and mobile app. Basically to make the native app light-weight the admin tasks will be handled by the web solution and the api will handle the rest of the work to render the contents, past-papers to the native app.</li> 
        <li><b><u>Role-Based Access Control:</u></b> 
          <ul>
            <li><b>Students:</b> Content and resources access, Live free quiz, Trial exam, Customer support</li>
            <li><b>Admins:</b> Admin dashboard, analytics, content management, library management.</li>
          </ul>
        </li>
        <li><b><u>Interactive Tools:</u></b> Real-time quizzes, Post check quizzes</li>
      </ul>
    
      <br/>
      <b>Technology Stack:</b>
      <ul>
        <li><b>Frontend:</b> ReactJS, Tailwind CSS, Material-UI, DaisyUI</li>
        <li><b>Backend:</b> Express.js, JWT</li>
        <li><b>Database:</b> MongoDB</li>
        <li><b>Cloud:</b> AWS (S3 Bucket)</li>
        <li><b>Deployment:</b> AWS</li>
        <li><b>Version Control:</b> Git</li>
      </ul>

      <br/>
      <br/>
      <b>N.B:</b> To learn more about the project, architecture, figma prototype, please visit the <u><a href="https://github.com/AsifZaman777/arcedemy-web">arcedemyWeb-github</a></u> repository.
    `,
      date: "Sept, 2023",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null); // Manage the selected project
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the selected project data
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProject(null); // Reset the selected project
  };

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">
      {/* Section Heading */}
      <h1 className="max-w-3xl mx-auto mb-10 bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Projects
      </h1>

      {/* Marquee Wrapper */}
      <Marquee
        gradient={true}
        speed={50}
        pauseOnHover={true}
        direction="left"
        className="w-full"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-5 sm:mx-10 md:mx-16"
            onClick={() => handleCardClick(project)} // Handle card click
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </Marquee>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal
          project={selectedProject} // Pass the selected project to the modal
          onClose={handleCloseModal} // Pass the close function
        />
      )}
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "./Shared/ProjectCard";
import ProjectModal from "./ProjectModal"; // Import the ProjectModal component

const Projects = () => {
  // Sample project data
  const projects = [
    {
      image: "https://via.placeholder.com/150",
      name: "Arcedemy",
      shortDesc:"Arcedemy is an online learning platform.",
      longDesc: `<b>Project Description:</b> Arcedemy is an online learning platform. Students can learn from a variety of courses and instructors. The platform offers a wide range of courses from programming to design. The platform also offers a certificate of completion for each course. The platform is built using React, Node.js, and MongoDB.
      <br/>
      <br/>
      <b>Technology used:</b> 
      <br/>
        <b>Frontend:</b> ReactJS, Tailwind CSS, Material-UI, DaisyUI
        <br/>
        <b>Backend:</b> Express.js, JWT
        <br/>
        <b>Database:</b> MongoDB
        <br/>
        <b>Cloud:</b> AWS
        <br/>
        <b>Deployment:</b> AWS
        <br/>
        <b>Version Control:</b> Git

      


      `,

      date: "Sept, 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Project Two",
      shortDesc: "Brief description of Project Two.",
      longDesc:"dasd",
      date: "February 15, 2024",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Project Three",
      shortDesc: "Brief description of Project Three.",
      longDesc:"dasd",
      date: "March 10, 2024",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Project Four",
      shortDesc: "Brief description of Project Four.",
      longDesc:"dasd",
      date: "April 5, 2024",
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

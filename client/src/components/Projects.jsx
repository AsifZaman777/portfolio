import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "./Shared/ProjectCard";
import ProjectModal from "./ProjectModal"; // Import the ProjectModal component
import  projects  from "../data/projectData"; 

const Projects = () => {
  
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
    <div id="projects" className="relative w-full overflow-hidden py-12 bg-white">
      {/* Section Heading */}
      <h1 className="max-w-3xl mx-auto mb-10 bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Projects
      </h1>

      {/* Marquee Wrapper */}
      <Marquee
        gradient={false}
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

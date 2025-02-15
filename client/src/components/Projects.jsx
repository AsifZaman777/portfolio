import React, { useState } from "react";
import ProjectCard from "./Shared/ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../data/projectData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="projects" className="relative w-full py-12 bg-white">
      <h1 className="max-w-3xl mx-auto mb-10 bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Projects
      </h1>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 50}%)`, width: `${totalPages * 100}%` }}>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex w-full ">
              {projects.slice(pageIndex * projectsPerPage, (pageIndex + 1) * projectsPerPage).map((project, index) => (
                <div key={index} className="w-1/4 p-2" onClick={() => handleCardClick(project)}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
};

export default Projects;

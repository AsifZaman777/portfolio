import React, { useState, useEffect } from "react";
import ProjectCard from "./Shared/ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../data/projectData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setProjectsPerPage(1);
      } else if (width < 1024) {
        setProjectsPerPage(3);
      } else {
        setProjectsPerPage(4);
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="relative w-full py-12 bg-white">
      <h1 className="max-w-3xl mx-auto mb-10 bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Projects
      </h1>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / totalPages}%)`, width: `${totalPages * 100}%` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex w-full flex-wrap">
              {projects.slice(pageIndex * projectsPerPage, (pageIndex + 1) * projectsPerPage).map((project, index) => (
                <div key={index} className={`w-full ${projectsPerPage === 1 ? '' : projectsPerPage === 3 ? 'sm:w-1/3' : 'sm:w-1/4'} p-2`} onClick={() => handleCardClick(project)}>
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

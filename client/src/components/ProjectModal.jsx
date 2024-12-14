import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick"; // Import the react-slick carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // Handle no project case

  // Ensure carouselImages is an array
  const carouselImages = Array.isArray(project.carouselImages)
    ? project.carouselImages
    : [project.carouselImages];

  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      fullScreen
      sx={{
        "& .MuiPaper-root": {
          background: "rgba(0, 0, 0, 0.8)", // Semi-transparent black
          backdropFilter: "blur(10px)", // Frosted glass effect
          color: "lightGreen", // White text for contrast
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {/* Modal Header */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          color: "lightGreen",
          width: "100%",
          textAlign: "center",
          fontSize: {
            xs: "1.25rem", // Small screens
            sm: "1.5rem",  // Medium screens
            md: "1.75rem", // Large screens
          },
        }}
      >
        {project.name}
        <IconButton onClick={onClose} sx={{ color: "lightGreen" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent
        sx={{
          padding: {
            xs: "1rem", // Small screens
            sm: "1.5rem", // Medium screens
            md: "2rem", // Large screens
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "1rem",
          width: "100%",
        }}
      >
        {/* Carousel */}
        <div style={{ width: "100%", maxWidth: "600px", marginBottom: "2rem" }}>
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Centered Date */}
        <p
          style={{
            fontSize: "0.875rem",
            marginTop: "0.5rem",
            textAlign: "center",
          }}
        >
          {`Date: ${project.date}`}
        </p>

        {/* Left-Aligned Description */}
        <p
          style={{
            fontSize: "1rem",
            marginTop: "1rem",
            textAlign: "left",
            lineHeight: "1.4",
            width: "100%", // Ensure the description takes full width
            maxWidth: "600px", // Set a max-width for better readability
            
          }}
          dangerouslySetInnerHTML={{ __html: project.longDesc }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

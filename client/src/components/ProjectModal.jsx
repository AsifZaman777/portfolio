import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // Handle no project case

  return (
    <Dialog
      open={true}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      fullScreen
      sx={{
        '& .MuiPaper-root': {
          background: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
          backdropFilter: 'blur(10px)', // Frosted glass effect
          color: 'lime', // White text for contrast
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {/* Modal Header */}
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'lime',
          width: '100%',
          textAlign: 'center',
          fontSize: {
            xs: '1.25rem', // Small screens
            sm: '1.5rem',  // Medium screens
            md: '1.75rem', // Large screens
          },
        }}
      >
        {project.name}
        <IconButton onClick={onClose} sx={{ color: 'lime' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent
        sx={{
          padding: {
            xs: '1rem',  // Small screens
            sm: '1.5rem', // Medium screens
            md: '2rem',  // Large screens
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '1rem',
          width: '100%',
        }}
      >
        {/* Centered Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto object-cover rounded-lg mb-4"
          style={{
            maxWidth: '300px', // Restrict max image width
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Centered Date */}
        <p
          style={{
            fontSize: '0.875rem',
            marginTop: '0.5rem',
            textAlign: 'center',
          }}
        >
          {`Date: ${project.date}`}
        </p>

        {/* Left-Aligned Description */}
        <p
          style={{
            fontSize: '1rem',
            marginTop: '1rem',
            textAlign: 'left',
            lineHeight: '1.5',
            width: '100%', // Ensure the description takes full width
            maxWidth: '600px', // Optional: Restrict maximum width for readability
          }}
          dangerouslySetInnerHTML={{ __html: project.longDesc }} // Render HTML content
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

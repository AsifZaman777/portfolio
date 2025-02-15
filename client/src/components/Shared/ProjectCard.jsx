import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';



// Custom styled ExpandMore button
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: '1rem auto'}}>
      <CardHeader
        title={project.name}
        subheader={project.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="liveLink">
          <LinkIcon color='warning' />
        </IconButton>
        <IconButton aria-label="git">
          <GitHubIcon color='warning' />
        </IconButton>
      </CardActions>
    
    </Card>
  );
};

export default ProjectCard;

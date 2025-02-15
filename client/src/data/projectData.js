import arc1 from "../assets/images/arcWeb/arc1.png";
import arc2 from "../assets/images/arcWeb/arc2.png";
import arc3 from "../assets/images/arcWeb/arc3.png";
import arc4 from "../assets/images/arcWeb/arc4.png";
import arc5 from "../assets/images/arcWeb/arc5.png";
import arc6 from "../assets/images/arcWeb/arc6.png";
import arc7 from "../assets/images/arcWeb/arc7.png";


const projects = [
  {
    image: arc1,
    carouselImages: [
      arc1,
      arc2,
      arc3,
      arc4,
      arc5,
      arc6,
      arc7,
    ], // Fixed spelling mistake here
    name: "Arcedemy web app",
    shortDesc:
      "Arcedemy is an online learning platform for the English medium students. The platform offers contents, live tests, and quizzes for the students.",
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

export default projects;

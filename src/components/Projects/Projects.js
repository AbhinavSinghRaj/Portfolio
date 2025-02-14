import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import todo from "../../Assets/Projects/todo.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        
          

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb Clone"
              description="Airbnb clone web app using HTML and CSS to replicate the design and functionality of the popular rental platform. This project involved creating a clean, responsive layout with a focus on user experience and visual appeal. 
              It enhanced my ability to build modern, adaptable user interfaces."
              // ghLink="https://github.com/AbhinavSinghRaj/AI_For_Social_Good"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="To-Do list web application using HTML, CSS, and JavaScript, which allows users to efficiently manage their tasks. The project enhances my skills in creating intuitive user interfaces and working with dynamic data using JavaScript.
               Through this app, I improved my ability to structure web layouts with CSS and manage user interactions in a seamless manner."
              // ghLink="https://github.com/AbhinavSinghRaj/Face_And_Emotion_Detection"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

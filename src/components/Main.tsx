import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src="https://images.flowcv.com/img/eyJpbWFnZUlkIjoiYXZhdGFyL2xtWUI4aDVrN0gwVkVDVTZxakRSTi5qcGVnIiwidHJhbnNmb3JtYXRpb25zIjp7ImNyb3AiOnsieVBjdCI6MC4xMjUzNzQ2MjUzNzQ2MjUzLCJ4UGN0IjowLjAwMDQ5OTUwMDQ5OTUwMDQyNzEsIndpZHRoUGN0IjowLjk5OTAwMDk5OTAwMDk5OTEsImhlaWdodFBjdCI6MC43NDkyNTA3NDkyNTA3NDk0fSwid2lkdGgiOjYwMCwiZm9ybWF0IjoianBlZyJ9fQ==.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/TouSeFou" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/taher-rhandi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Taher Rhandi</h1>
          <p>Software Engineer</p>
          <a href='mailto:taher.rhandi02@gmail.com'>taher.rhandi02@gmail.com</a>


        </div>
      </div>
    </div>
  );
}

export default Main;
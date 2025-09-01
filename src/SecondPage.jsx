import React from "react";
import Image1 from "/Users/filipplandgraf/portfolio-website/content/webdev.jpg";
import Image2 from "/Users/filipplandgraf/portfolio-website/content/video-editing.jpg";
import Image3 from "/Users/filipplandgraf/portfolio-website/content/3d.jpeg";

function SecondPage() {
  return (
    <div id="SecondPage" className="SecondPage">
      <div className="secondpagecontent">
        <h1>About</h1>
        <p>
          I am a developer with a passion for building websites, mobile and
          desktop applications. I am also a video editor with experience in
          Adobe Premiere Pro and After Effects. I also do 3D modelling,
          texturing and animation.
        </p>
      </div>
      <div className="aboutwindows">
        <div id="scrollImage" className="aboutwindow">
          <div className="windowscontent">
            <h2>Web development</h2>
            <p>
              I have experience in development using HTML, CSS, JavaScript,
              React, Node.js, and Python. I also have experience with databases
              like MongoDB and PostgreSQL.
            </p>
          </div>
          <div className="img">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="smallwindows">
          <div id="scrollImage" className="aboutwindow1">
            <a target="_blank" href="https://filipplandgraf.framer.website">
              <div className="windowscontent">
                <h2>App development</h2>
                <p>
                  I have developed mobile and desktop applications using React
                  Native, C#, Java and Swift.
                </p>
              </div>
            </a>
            <div className="img">
              <img src={Image3} alt="" />
            </div>
          </div>
          <div id="scrollImage1" className="aboutwindow1">
            <div className="windowscontent">
              <h2>Content and 3D</h2>
              <p>
                I create videos and 3D models using tools like Premiere Pro,
                After Effects, Blender.
              </p>
            </div>
            <div className="img3">
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;

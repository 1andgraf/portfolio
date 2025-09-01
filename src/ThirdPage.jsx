import React from "react";
import Img1 from "/Users/filipplandgraf/portfolio-website/content/html.png";
import Img2 from "/Users/filipplandgraf/portfolio-website/content/css.png";
import Img3 from "/Users/filipplandgraf/portfolio-website/content/js.png";
import Img4 from "/Users/filipplandgraf/portfolio-website/content/react.png";
import Img5 from "/Users/filipplandgraf/portfolio-website/content/tailwind.png";
import Img6 from "/Users/filipplandgraf/portfolio-website/content/node.png";
import Img7 from "/Users/filipplandgraf/portfolio-website/content/figma.png";
import Img8 from "/Users/filipplandgraf/portfolio-website/content/git.png";
import Img9 from "/Users/filipplandgraf/portfolio-website/content/python.png";
import Img10 from "/Users/filipplandgraf/portfolio-website/content/csharp.png";
import Img11 from "/Users/filipplandgraf/portfolio-website/content/unity.png";
import Img12 from "/Users/filipplandgraf/portfolio-website/content/swift.png";
import Img13 from "/Users/filipplandgraf/portfolio-website/content/mongodb.png";
import Img14 from "/Users/filipplandgraf/portfolio-website/content/ts.png";
import Img15 from "/Users/filipplandgraf/portfolio-website/content/java.png";
import Img16 from "/Users/filipplandgraf/portfolio-website/content/android.png";

import Video1 from "/Users/filipplandgraf/portfolio-website/content/portfolio.mp4";

function ThirdPage() {
  return (
    <>
      <div className="ThirdPage" id="ThirdPage">
        <div className="thirdpagecontent">
          <h1>Technologies</h1>
          <p>This is a list of technologies I have worked with.</p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <img className="techicon" src={Img1} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <img className="techicon" src={Img2} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <img className="techicon" src={Img3} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://react.dev/">
                <img className="techicon" src={Img4} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://tailwindcss.com/">
                <img className="techicon" src={Img5} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://nodejs.org/en">
                <img className="techicon" src={Img6} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.figma.com/">
                <img className="techicon" src={Img7} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://git-scm.com/">
                <img className="techicon" src={Img8} alt="" />
              </a>
            </li>
          </ul>
          <ul id="list2">
            <li>
              <a target="_blank" href="https://www.python.org/">
                <img className="techicon" src={Img9} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://learn.microsoft.com/en-us/dotnet/csharp/"
              >
                <img
                  className="techicon"
                  src={Img10}
                  alt=""
                  style={{ width: "130px" }}
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://unity.com/">
                <img
                  className="techicon"
                  src={Img11}
                  alt=""
                  style={{ filter: "contrast(0.7) brightness(1)" }}
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://apple.com/swift">
                <img className="techicon" src={Img12} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.mongodb.com/">
                <img className="techicon" src={Img13} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.typescriptlang.org/">
                <img className="techicon" src={Img14} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.java.com/">
                <img className="techicon" src={Img15} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://developer.android.com/">
                <img className="techicon" src={Img16} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <video autoPlay muted loop playsInline id="video2" src={Video1}></video>
    </>
  );
}

export default ThirdPage;

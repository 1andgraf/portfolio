import React from "react";
import Video from "/Users/filipplandgraf/portfolio-website/content/stars.mp4";

function MainPage() {
  const handleLoaded = (e) => {
    e.target.playbackRate = 0.5;
  };

  const links = document.querySelectorAll(".landingpagecontent a");
  links.forEach((link) => {
    link.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty("--x", `${x}px`);
      this.style.setProperty("--y", `${y}px`);
    });
  });

  const text = document.getElementById("scrollText");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const newSize = Math.max(80, 40 + scrollY / 8);
    text.style.fontSize = newSize + "px";
  });

  return (
    <>
      <div className="mainpagecontent" id="bgVideo">
        <div className="landingpagecontent">
          <p>
            <b>Filipp Landgraf</b>
          </p>
          <h1 id="scrollText">
            Welcome to <br />
            my portfolio
          </h1>
          <a href="#SecondPage">
            <span>Learn more</span>
          </a>
          <a href="#q">
            <span>Contact</span>
          </a>
        </div>
        <div className="code">
          <p>welcome.jsx</p>
          <hr />
          <>
            <pre>
              <code>
                <span className="keyword">import</span> React{" "}
                <span className="keyword">from</span> 'react';
                {"\n\n"}
                <span className="keyword">export default function</span>{" "}
                Welcome() {"{"}
                {"\n  "}return ({"\n    "}
                <span className="tag">
                  &lt;div className="min-h-screen bg-gray-100"&gt;
                </span>
                {"\n      "}
                <span className="tag">
                  &lt;h1 className="text-4xl font-bold"&gt;
                </span>
                <br />
                {"      "}
                {"  "}Welcome to my portfolio
                <br />
                <span className="tag">{"      "}&lt;/h1&gt;</span>
                {"\n      "}
                <span className="tag">&lt;p className="text-gray-600"&gt;</span>
                <br />
                {"      "}
                {"  "}Explore my projects below
                <br />
                {"      "}
                <span className="tag">&lt;/p&gt;</span>
                {"\n    "}
                <span className="tag">&lt;/div&gt;</span>
                {"\n  "}){"};"}
              </code>
            </pre>
          </>
        </div>
      </div>
      <div className="scrollindicator"></div>
    </>
  );
}

export default MainPage;

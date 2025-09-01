import React from "react";
import Terminal from "/Users/filipplandgraf/portfolio-website/content/terminal.png";
import Webchat from "/Users/filipplandgraf/portfolio-website/content/webchat.png";
import AppleWatchGPT from "/Users/filipplandgraf/portfolio-website/content/applewatchgpt.png";
import TranslateExtension from "/Users/filipplandgraf/portfolio-website/content/translateextension.png";
import TheGameOfLife from "/Users/filipplandgraf/portfolio-website/content/thegameoflife.png";
import TTSbot from "/Users/filipplandgraf/portfolio-website/content/ttsbot.png";

function FourthPage() {
  return (
    <div className="FourthPage" id="FourthPage">
      <div className="fourthpagecontent">
        <h1>Portfolio</h1>
        <p>This is a list of projects I have built.</p>
      </div>
      <div class="lens-background"></div>
      <div class="scroll-container">
        <div class="empty-item"></div>
        <a
          target="_blank"
          href="https://derdart.github.io/website1/"
          class="item"
        >
          <h1>Terminal Website</h1>
          <img src={Terminal} alt="" />
        </a>
        <a
          class="item"
          target="_blank"
          href="https://github.com/1andgraf/webchat"
        >
          <h1>Web Chat</h1>
          <img src={Webchat} alt="" />
        </a>
        <a
          class="item"
          target="_blank"
          href="https://github.com/1andgraf/AppleWatchGPT"
        >
          <h1>Apple Watch ChatGPT</h1>
          <img src={AppleWatchGPT} alt="" />
        </a>
        <a
          class="item"
          target="_blank"
          href="https://github.com/1andgraf/TranslateExtension"
        >
          <h1>Translate Extension</h1>
          <img src={TranslateExtension} alt="" />
        </a>
        <a
          class="item"
          target="_blank"
          href="https://github.com/1andgraf/TheGameOfLife"
        >
          <h1>The Game Of Life</h1>
          <img src={TheGameOfLife} alt="" style={{}} />
        </a>
        <a
          class="item"
          target="_blank"
          href="https://github.com/1andgraf/TTSbot"
        >
          <h1>TTS Telegram bot</h1>
          <img src={TTSbot} alt="" />
        </a>
        <div class="empty-item"></div>
      </div>
      <div className="scroll-display"></div>
    </div>
  );
}

export default FourthPage;

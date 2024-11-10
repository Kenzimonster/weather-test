import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="authorLinks">
      <p>
        coded by
        <a href="https://github.com/Kenzimonster" target="_blank"  rel="noreferrer">
          Kenzi
        </a>
        and open-sourced on
        <a
          href="https://github.com/Kenzimonster/weather-test"
          target="_blank"  rel="noreferrer"
        >
          GitHub
        </a>
        and hosted on
        <a href="https://taupe-gelato-67e18b.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </p>
    </footer>
  );
}

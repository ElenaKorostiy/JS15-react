import React from "react";

import "./footer.css";

export const Footer=()=> {
  return (
    <footer>
      <div className="footer-wrapper">
        
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


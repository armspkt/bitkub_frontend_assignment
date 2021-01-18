import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
export default () => (
  <footer>
    <p>
      copy right &copy; 2021 <cite>thana wisutphusi</cite>
    </p>
    <div id="info">
      <a href="https://facebook.com/A.trbcp" target="blank">
        <FaFacebook className="info__link fb" />
      </a>
      <a href="https://github.com/ohmuay" target="blank">
        <FaGithub className="info__link git" />
      </a>
    </div>
  </footer>
);

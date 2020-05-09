import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()}, Devon D Deason</p>
      <p>
        Data provided from the fine folks at{" "}
        <a href="https://corona.lmao.ninja/">corona.lmao.ninja</a>
      </p>
    </footer>
  );
};

export default Footer;

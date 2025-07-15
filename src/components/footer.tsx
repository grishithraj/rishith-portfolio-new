import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      width: "100%",
      padding: "1rem 0",
      background: "#222",
      color: "#fff",
      textAlign: "center",
      left: 0,
      bottom: 0,
    }}
    className="mt-20 "
  >
    <span>
      &copy; {new Date().getFullYear()} Rishith Portfolio. All rights reserved.
    </span>
  </footer>
);

export default Footer;

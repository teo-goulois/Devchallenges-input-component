import React from "react";
import "./style.scss";

const Sidebar = () => {
  const [activeLink, setActiveLink] = React.useState("inputs");

  return (
    <div className="sidebar">
      <h2 className="title">
        Dev
        <span>challenges.io</span>
      </h2>
      <ul>
        <li>
          <button
            onClick={() => setActiveLink("typography")}
            className={`${activeLink === "typography" && "active"}`}
          >
            Typography
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveLink("grid")}
            className={`${activeLink === "grid" && "active"}`}
          >
            Grid
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveLink("buttons")}
            className={`${activeLink === "buttons" && "active"}`}
          >
            Buttons
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveLink("inputs")}
            className={`${activeLink === "inputs" && "active"}`}
          >
            Inputs
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

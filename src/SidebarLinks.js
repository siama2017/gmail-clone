import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarLinks.css";

const SidebarLinks = ({ Icon, title, number, selected }) => {
  const history = useHistory();
  return (
    <div className={`sidebarLinks ${selected && "sidebarLinks--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarLinks;

import React from "react";

const Service = ({ icon, serviceTitle, serviceText, bg }) => {
  const iconClass = icon
    .substring(icon.lastIndexOf("/") + 1)
    .replace(".png", "");
  return (
    <div className={`services ${iconClass}`}>
      <img src={icon} alt={`${icon} icon`} />
      <h3>{serviceTitle}</h3>
      <p>{serviceText}</p>
    </div>
  );
};

export default Service;

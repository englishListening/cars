import React from "react";

export default function Props(props) {
  return (
    <a href="" className="ad">
    <div className="search">
      <h2 className="H2">{props.name}</h2>
      <h3>{props.type}</h3>
    </div>
    </a>
  );
}
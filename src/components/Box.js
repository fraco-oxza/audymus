import React from "react";
import "./Box.css";

export default function Box(props) {
  return (
    <div className="box">
      <div className="box-header">
        <img src={props.image} alt={props.title + " image"} />
        <span>{props.title}</span>
      </div>
      <p>{props.text}</p>
    </div>
  );
}

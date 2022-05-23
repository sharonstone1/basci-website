import "./Card.css";
import React from "react";

function Card(props) {
  // please do not forgot whitespace when write the default
  // value of your className.
  // props.className add all className from other components
  // to the Card component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

import React from "react";
import "./Greet.css";

const Greet = (props) => {
  console.log(props); // always object
  return (
    <div>
      <h2>Hello, {props.name}</h2>
      {props.h1}
      <p style={{ color: "blue" }}>I am {props.age} years old</p>
      <div
        style={{
          border: "3px solid violet",
          width: "300px",
          height: "300px",
          fontSize: "30px",
          margin: "10px auto",
        }}
      >
        Block
      </div>
      <img className="image" src={props.image} alt="" />
    </div>
  );
};

export default Greet;

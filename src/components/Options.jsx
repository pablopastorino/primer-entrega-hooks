import React from "react";
import StoryContext from "../context/storyContext";
import Button from "./Button";

const Options = () => {
  const { steps, options } = React.useContext(StoryContext);

  return (
    <div className="options">
      <h2>Choose your way!</h2>
      {options[steps.length].map((option, index) => {
        return <Button key={index} option={option} />;
      })}
    </div>
  );
};

export default Options;

import React from "react";
import StoryContext from "../context/storyContext";

const Button = ({ option }) => {
  const { steps, adventure, options, onHandleOption } =
    React.useContext(StoryContext);
  const checked =
    option !== options[options.length - 1][0] ? [...steps, option] : options[0];
  return (
    <button onClick={() => onHandleOption(checked)}>
      {adventure[option].icon}
    </button>
  );
};

export default Button;

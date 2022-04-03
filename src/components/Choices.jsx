import React from "react";
import StoryContext from "../context/storyContext";

const Choices = () => {
  const { steps, onHandleOption } = React.useContext(StoryContext);
  return (
    <ol>
      {steps.map((step, index) => {
        return (
          <li
            key={index}
            onClick={() => onHandleOption(steps.slice(0, index + 1))}
          >
            {step}
          </li>
        );
      })}
    </ol>
  );
};

export default Choices;

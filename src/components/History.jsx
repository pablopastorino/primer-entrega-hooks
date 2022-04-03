import React, { useState, useEffect } from "react";
import StoryContext from "../context/storyContext";
import Paragraph from "./Paragraph";
import Options from "./Options";
import Choices from "./Choices";
import { storyOptions as options, adventure } from "../../history.json";

function History(props) {
  const [steps, setStep] = useState(options[0]);

  useEffect(() => {
    if (steps.length === options.length - 1) {
      return () => {
        alert("Let's go again!");
      };
    }
  });

  return (
    <StoryContext.Provider
      value={{
        steps: steps,
        options: options,
        adventure: adventure,
        onHandleOption: (newSteps) => setStep(newSteps),
      }}
    >
      <Paragraph />
      <Options />
      <Choices />
    </StoryContext.Provider>
  );
}

export default History;

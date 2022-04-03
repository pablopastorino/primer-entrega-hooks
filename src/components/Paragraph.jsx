import React from "react";
import StoryContext from "../context/storyContext";

function Paragraph(props) {
  const { adventure, steps } = React.useContext(StoryContext);
  const currentStep = steps[steps.length - 1];
  return <h1>{adventure[currentStep].text}</h1>;
}

export default Paragraph;

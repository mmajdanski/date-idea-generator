import React from "react";
import { useState } from "react";

interface Props {
  ideaArray: string[];
  label: string;
}

const IdeaGenerator: React.FC<Props> = ({ ideaArray, label }) => {
  const [idea, setIdea] = useState("");

  const handleButtonClick = () => {
    // Select a random date idea from the array
    const randomIndex = Math.floor(Math.random() * ideaArray.length);
    const randomIdea = ideaArray[randomIndex];

    // Remove the selected date idea from the array
    ideaArray.splice(randomIndex, 1);

    setIdea(randomIdea);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button className="w-48 h-48 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700" onClick={handleButtonClick}>
        <span className="text-3xl font-bold text-center mt-4 leading-none break-words font-fancy fas fa-heart">
          Get
          <br />
          {label}
          <br />
          Idea
          <br />
        </span>
      </button>
      <span>{`${ideaArray.length} ideas remaining`}</span>
      {idea && <p className="text-3xl font-bold underline text-center mt-8">{idea}</p>}
    </div>
  );
};

export default IdeaGenerator;

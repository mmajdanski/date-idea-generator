import React from "react";

interface Props {
  setSelectedIdeaGen: (ideaType: string) => void;
}

const IdeaPicker: React.FC<Props> = ({ setSelectedIdeaGen }) => {
  const renderButton = (ideaType: string) => {
    return (
      <button
        className="w-36 h-12 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-lg mr-4"
        onClick={() => setSelectedIdeaGen(ideaType)}
      >
        <span className="text-xl font-bold text-center mt-4 leading-none break-words">{ideaType}</span>
      </button>
    );
  };

  return (
    <div>
      <h2 className="flex flex-row justify-center mb-8 text-2xl">What are you picking today?</h2>
      {renderButton("Date")}
      {renderButton("Restaurant")}
    </div>
  );
};

export default IdeaPicker;

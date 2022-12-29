import React from "react";
import "./App.css";
import { useState } from "react";

const dateIdeas = [
  "Go for a hike in a nearby park or trail",
  "Visit a museum",
  "Go to a concert/show",
  "Try a new restaurant",
  "Go to a winery or brewery for a tasting tour",
  "Go to a movie or watch one at home",
  "Take a cooking or baking class together",
  "Go to the shooting range",
  "Go axe throwing",
  "Go out for dinner",
  "Go see a comedian perform",
  "Go play mini-golf",
  "Go to top golf",
  "Go to an indoor rock climbing gym",
  "Go camping",
  "Go to the lake or paddleboarding or kayaking",
  "Go do a yoga class together",
  "Go to a sensory deprivation tank session",
  "Go to a sound healing session",
  "Go to an escape room",
  "Go to a painting class",
  "Go snowboarding/skiing",
  "Go to the zoo",
  "Go get a massage",
  "Go to a barcade",
  "Go to a casino",
  "Go to the botanical gardens or a greenhouse",
  "Go to an outdoor ropes course",
  "Go to the local market",
  "Go rollerblading",
  "Go bowling",
  "Go play darts",
  "Go play billiards",
  "Play some board games",
  "Go mountain biking or bike riding",
  "Go to Goodwill and shop with each other",
  "Go to a Jazz Club",
];

const restIdeas = [
  "Middle Eastern",
  "Greek/Med",
  "Indian",
  "Italian / Pizza",
  "American/Burgers/Salad",
  "Japanese/Sushi",
  "Korean",
  "Thai",
  "Vietnamese/Pho",
  "Seafood/Oysters",
  "Shakin Crab / Louisiana Style",
];

function App() {
  const [dateIdea, setDateIdea] = useState("");
  const [restIdea, setRestIdea] = useState("");
  const [currentIdeaGen, setCurrentIdeaGen] = useState("");

  const handleButtonClick = (randomIdeaArray: string[]) => {
    // Select a random date idea from the array
    const randomIndex = Math.floor(Math.random() * randomIdeaArray.length);
    const randomIdea = randomIdeaArray[randomIndex];

    // Remove the selected date idea from the array
    randomIdeaArray.splice(randomIndex, 1);

    if (currentIdeaGen === "date") setDateIdea(randomIdea);
    if (currentIdeaGen === "rest") setRestIdea(randomIdea);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {currentIdeaGen !== "" ? (
        <button
          className="w-48 h-48 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          onClick={() => {
            if (currentIdeaGen === "date") handleButtonClick(dateIdeas);
            if (currentIdeaGen === "rest") handleButtonClick(restIdeas);
          }}
        >
          <span className="text-3xl font-bold text-center mt-4 leading-none break-words font-fancy fas fa-heart">
            Get
            <br />
            {currentIdeaGen === "date" && "Date"}
            {currentIdeaGen === "rest" && "Restaurant"}
            <br />
            Idea
            <br />
          </span>
        </button>
      ) : (
        <div className="">
          <h2 className="flex flex-row justify-center mb-8 text-2xl">What are you picking today?</h2>
          <button
            className="w-36 h-12 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-lg mr-4"
            onClick={() => setCurrentIdeaGen("date")}
          >
            <span className="text-xl font-bold text-center mt-4 leading-none break-words font-fancy fas fa-heart">Date</span>
          </button>
          <button
            className="w-36 h-12 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            onClick={() => setCurrentIdeaGen("rest")}
          >
            <span className="text-xl font-bold text-center mt-4 leading-none break-words font-fancy fas fa-heart">Restaurant</span>
          </button>
        </div>
      )}
      {currentIdeaGen === "date" && <span> {`${dateIdeas.length} ideas remaining`}</span>}
      {currentIdeaGen === "rest" && <span> {`${restIdeas.length} ideas remaining`}</span>}
      {dateIdea && <p className="text-3xl font-bold underline text-center mt-8">{dateIdea}</p>}
      {restIdea && <p className="text-3xl font-bold underline text-center mt-8">{restIdea}</p>}
    </div>
  );
}

export default App;

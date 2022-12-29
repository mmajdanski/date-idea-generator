import React from "react";
import { useState } from "react";
import IdeaGenerator from "./components/IdeaGenerator";
import IdeaPicker from "./components/IdeaPicker";

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
  const [selectedIdeaGen, setSelectedIdeaGen] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {selectedIdeaGen !== "" ? (
        <div>
          {selectedIdeaGen === "Date" && <IdeaGenerator ideaArray={dateIdeas} label="Date" />}
          {selectedIdeaGen === "Restaurant" && <IdeaGenerator ideaArray={restIdeas} label="Restaurant" />}
        </div>
      ) : (
        <IdeaPicker setSelectedIdeaGen={setSelectedIdeaGen} />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useState } from 'react';

const dateIdeas = [
  'Go for a hike in a nearby park or trail',
  'Visit a museum',
  'Go to a concert/show',
  'Try a new restaurant',
  'Go to a winery or brewery for a tasting tour',
  'Go to a movie or watch one at home',
  'Take a cooking or baking class together',
  'Go to the shooting range',
  'Go axe throwing',
  'Go out for dinner',
  'Go see a comedian perform',
  'Go play mini-golf',
  'Go to top golf',
  'Go to an indoor rock climbing gym',
  'Go camping',
  'Go to the lake or paddleboarding or kayaking',
  'Go do a yoga class together',
  'Go to a sensory deprivation tank session',
  'Go to a sound healing session',
  'Go to an escape room',
  'Go to a painting class',
  'Go snowboarding/skiing',
  'Go to the zoo',
  'Go get a massage',
  'Go to a barcade',
  'Go to a casino',
  'Go to the botanical gardens or a greenhouse',
  'Go to an outdoor ropes course',
  'Go to the local market',
  'Go rollerblading',
  'Go bowling',
  'Go play darts',
  'Go play billiards',
  'Play some board games',
  'Go mountain biking or bike riding',
  'Go to Goodwill and shop with each other',
  'Go to a Jazz Club'

  ];


function App() {

  const [dateIdea, setDateIdea] = useState('');

  const handleButtonClick = () => {
    // Select a random date idea from the array
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const randomDateIdea = dateIdeas[randomIndex];

    // Remove the selected date idea from the array
    dateIdeas.splice(randomIndex, 1);

    setDateIdea(randomDateIdea);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button className="w-40 h-40 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700" onClick={handleButtonClick}>
      <span className="text-3xl font-bold text-center mt-4 leading-none break-words font-fancy fas fa-heart">
      Get
      <br />
      Date
      <br />
      Idea
      <br />
    </span>
    </button>
    <span>      {`${dateIdeas.length} ideas remaining`}</span>
      {dateIdea && <p className="text-3xl font-bold underline text-center mt-8">{dateIdea}</p>}
    </div>
  );
}

export default App;

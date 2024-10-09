import React, { useState } from "react";
import IconBar from "./Components/Iconbar";
import MapComponent from "./Components/MapComponent";
import RoverData from "./Components/RoverData";

function App() {
  const [showWavepoints, setShowWavepoints] = useState(false);
  const [showRoverData, setShowRoverData] = useState(false);

  const toggleWavepoints = () => {
    setShowWavepoints(!showWavepoints);
  };

  const toggleRoverData = () => {
    setShowRoverData(!showRoverData);
  };

  return (
    <div className="relative h-screen">
      <div className={`${showRoverData ? 'blur-sm' : ''} h-full`}>
        <IconBar onViewWavepoints={toggleWavepoints} onViewFlightData={toggleRoverData} />
        <div className="h-[calc(100%-64px)]"> {/* Adjust 64px if your IconBar has a different height */}
          <MapComponent showWavepoints={showWavepoints} />
        </div>
      </div>
      {showRoverData && (
        <div className="absolute inset-0 z-50">
          <RoverData onClose={toggleRoverData} />
        </div>
      )}
    </div>
  );
}

export default App;
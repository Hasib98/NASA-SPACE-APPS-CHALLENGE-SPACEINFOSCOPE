// const encodedValue = encodeURIComponent(cardSatellite);
import { useState, useEffect } from "react";
import Starfield from "react-starfield";
import CloudSatellite from "./components/CloudSatellite";

import PlanetGroup from "./components/PlanetGroup";
import HomeButton from "./components/HomeButton";
import ExoplanetInfo from "./components/planet-details/ExoplanetInfo";
import Satellite from "./components/Satellite";

// import "./assets/paper-plane.svg";
export default function App() {
  const [planetName, setPlanetName] = useState(null);
  const [activeSatellite, setActiveSatellite] = useState(null);
  const [planetList, setPlanetList] = useState([]);
  useEffect(() => {
    const encodedValue = encodeURIComponent(activeSatellite);
    // const url =
    //   "https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+5+pl_name+FROM+ps+WHERE+disc_facility=%27Transiting%20Exoplanet%20Survey%20Satellite%20(TESS)%27&format=json";
    const url = `https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+14+pl_name+FROM+ps+WHERE+disc_facility='${encodedValue}'&format=json`;
    async function fecthData() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          console.log("no responspe");
        }
        const data = await res.json();
        setPlanetList(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fecthData();
  }, [activeSatellite]);

  // _________________________________________________________________________________________

  return (
    <div className="flex flex-col items-center space-y-7 max-h-screen  max-w-screen">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />

      <Title />
      <Search setPlanetName={setPlanetName} />
      {!planetName ? (
        <>
          <SatelliteCardBundle setActiveSatellite={setActiveSatellite} />
          <PlanetCard
            activeSatellite={activeSatellite}
            planetList={planetList}
            setPlanetName={setPlanetName}
          />
        </>
      ) : (
        <>
          <ExoplanetInfo planetName={planetName} />
          <HomeButton
            setPlanetName={setPlanetName}
            setActiveSatellite={setActiveSatellite}
          />
        </>
      )}
    </div>
  );
}

export function Title() {
  return (
    <h1 className="text-4xl  font-kavoon text-white mt-16">
      (The Site is under development) Welcome to{" "}
      <span className="bg-gradient-to-r from-amber-600 from-0% via-orange-400 to-orange-300 text-transparent bg-clip-text outline outline-offset-2  text-outline">
        Space Info Scope
      </span>
    </h1>
  );
}

function Search({ setPlanetName }) {
  const [searchPlanetName, setSearchPlanetName] = useState("");
  function hanndleSubmit(e) {
    e.preventDefault();

    if (!searchPlanetName) return;

    setPlanetName(searchPlanetName);
    setSearchPlanetName("");
  }

  return (
    <form
      className="flex justify-between space-x-4 w-96"
      onSubmit={hanndleSubmit}
    >
      <input
        className=" w-full px-4 py-1 rounded-3xl font-kavoon text-sm text-black bg-gradient-to-r from-cyan-300 from-12% via-cyan-600 to-blue-800 outline outline-4 outline-amber-200"
        type="text"
        placeholder="Type an ExoPlant Name..."
        value={searchPlanetName}
        onChange={(e) => setSearchPlanetName(e.target.value)}
      />
      <button className=" px-4 py-1 rounded-3xl font-kavoon text-sm text-black bg-gradient-to-r from-amber-400 from-0% via-orange-300 to-red-200  outline outline-4 outline-amber-200">
        Search
      </button>
    </form>
  );
}
function SatelliteCardBundle({ setActiveSatellite }) {
  const satelliteArray = [
    "Transiting Exoplanet Survey Satellite (TESS)",
    "James Webb Space Telescope (JWST)",
    "Kepler",
    "Spitzer Space Telescope",
    "Hubble Space Telescope",
  ];
  return (
    <div className="flex space-x-4 ">
      {satelliteArray.map((satelliteName) => (
        <SatelliteCard
          satelliteName={satelliteName}
          setActiveSatellite={setActiveSatellite}
          key={satelliteName}
        />
      ))}
    </div>
  );
}

function SatelliteCard({ satelliteName, setActiveSatellite }) {
  function handleSatelliteClick() {
    setActiveSatellite(satelliteName);
  }
  return (
    <div
      className=" bg-fuchsia-300 bg-opacity-50  shadow-lg shadow-fuchsia-500/50  p-4 rounded-2xl h-24 w-32 hover:-translate-y-4 ease-in-out duration-200 active:bg-purple-200"
      onClick={handleSatelliteClick}
    >
      <Satellite satelliteName={satelliteName} />
    </div>
  );
}

function PlanetCard({ activeSatellite, planetList, setPlanetName }) {
  return (
    <div className="relative  top-20  w-3/4 aspect-[5/1] bg-blue-950  rounded-xl  border-solid border-4 border-gray-400 flex flex-col items-center pt-0 pl-10 pr-10 pb-10">
      <div className="absolute left-0 -top-10">
        {activeSatellite && (
          <CloudSatellite activeSatellite={activeSatellite} />
        )}
      </div>
      <div className="font-mochiy mb-5 text-slate-50 ">
        {activeSatellite || "Exoplanet Types:"}
      </div>
      <PlanetGroup planetList={planetList} setPlanetName={setPlanetName} />
    </div>
  );
}

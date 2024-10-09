// const encodedValue = encodeURIComponent(cardSatellite);
import { useState, useEffect } from "react";

// import "./assets/paper-plane.svg";
export default function App() {
  const [activeSatellite, setActiveSatellite] = useState("");
  const [planetList, setPlanetList] = useState([]);
  useEffect(() => {
    const encodedValue = encodeURIComponent(activeSatellite);
    // const url =
    //   "https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+5+pl_name+FROM+ps+WHERE+disc_facility=%27Transiting%20Exoplanet%20Survey%20Satellite%20(TESS)%27&format=json";
    const url = `https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+5+pl_name+FROM+ps+WHERE+disc_facility='${encodedValue}'&format=json`;
    async function fecthData() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          console.log("no responspe");
        }
        const data = await res.json();
        console.log(data);
        setPlanetList(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fecthData();
  }, [activeSatellite]);

  return (
    <div className="flex flex-col items-center space-y-7">
      <Title />
      <Search />
      <SatelliteCardBundle setActiveSatellite={setActiveSatellite} />
      <PlanetCard activeSatellite={activeSatellite} planetList={planetList} />
    </div>
  );
}

export function Title() {
  return (
    <h1 className="text-4xl  font-kavoon text-white mt-16">
      Welcome to Space Info Scope
    </h1>
  );
}

function Search() {
  return (
    <div>
      <input type="text" />
      <button className="bg-fuchsia-700">Search</button>
    </div>
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
      className="bg-white p-4 rounded-xl h-22 w-24"
      onClick={handleSatelliteClick}
    >
      <Satellite satelliteName={satelliteName} />
    </div>
  );
}

function Satellite({ satelliteName }) {
  const sat = require(`./${satelliteName}.png`);

  return <img src={sat} alt="Satellite" className=" drop-shadow-2xl" />;
}
function PlanetCard({ activeSatellite, planetList }) {
  return (
    <div className=" bg-slate-50  h-auto w-4/5 rounded-xl  border-solid border-4 border-sky-500 flex flex-col items-center justify-center">
      <div className="font-mochiy">{activeSatellite || "Exoplanet Types:"}</div>
      <div className="flex space-x-16">
        {planetList.map((planetTitle) => (
          <Planet planetTitle={planetTitle} key={planetTitle} />
        ))}
      </div>
    </div>
  );
}

function Planet({ planetTitle }) {
  const planet = require(`./gas-giant.png`);
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 size-40 mt-4 mb-4">
      <img src={planet} alt="Satellite" className=" drop-shadow-2xl h-2/3" />
      <div className=" font-kavoon text-violet-950 ">
        {planetTitle.pl_name || "Un Named Planet"}
      </div>
    </div>
  );
}

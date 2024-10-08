import { useEffect, useState } from "react";

// import "./assets/paper-plane.svg";
export default function App() {
  const [cardSatellite, setCardSatellite] = useState(
    "Transiting Exoplanet Survey Satellite (TESS)"
  );
  const [planetTitle, setPlanetTitle] = useState("");

  useEffect(() => {
    async function fetchPlanets() {
      const encodedValue = encodeURIComponent(cardSatellite);
      console.log(encodedValue);
      const url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+pl_name+FROM+ps+WHERE+disc_facility='${encodedValue}'&format=json`;

      const response = await fetch(url, { mode: "no-cors" });

      const data = await response.json();
      console.log(data[0].pl_name);
      setPlanetTitle(data[0].pl_name);
    }

    fetchPlanets();
  }, [cardSatellite]);

  return (
    <div className="flex flex-col items-center space-y-7">
      <Title />
      <Search />
      <SatelliteCardBundle setCardSatellite={setCardSatellite} />
      <PlanetCard cardSatellite={cardSatellite} planetTitle={planetTitle} />
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

export function Search() {
  return (
    <div>
      <input type="text" />
      <button className="bg-fuchsia-700">Search</button>
    </div>
  );
}
export function SatelliteCardBundle({ setCardSatellite }) {
  const satelliteArray = [
    "Transiting Exoplanet Survey Satellite (TESS)",
    "James Webb Space Telescope (JWST)",
    "Kepler",
    "Spitzer Space Telescope",
    "Hubble Space Telescope",
  ];
  return (
    <div className="flex space-x-4 ">
      <SatelliteCard
        satellite={satelliteArray[0]}
        setCardSatellite={setCardSatellite}
      />
      <SatelliteCard
        satellite={satelliteArray[1]}
        setCardSatellite={setCardSatellite}
      />
      <SatelliteCard
        satellite={satelliteArray[2]}
        setCardSatellite={setCardSatellite}
      />
      <SatelliteCard
        satellite={satelliteArray[3]}
        setCardSatellite={setCardSatellite}
      />
      <SatelliteCard
        satellite={satelliteArray[4]}
        setCardSatellite={setCardSatellite}
      />
    </div>
  );
}

export function SatelliteCard({ satellite, setCardSatellite }) {
  function handleSatelliteClick(value) {
    setCardSatellite(value);
  }
  return (
    <div
      className="bg-white p-4 rounded-xl h-22 w-24"
      onClick={() => handleSatelliteClick(satellite)}
    >
      <Satellite satellite={satellite} />
    </div>
  );
}

export function Satellite({ satellite }) {
  //   : "";
  let satname;
  if (satellite === "Transiting Exoplanet Survey Satellite (TESS)") {
    satname = "tess";
  } else if (satellite === "Transiting Exoplanet Survey Satellite (TESS)") {
    satname = "tess";
  } else if (satellite === "James Webb Space Telescope (JWST)") {
    satname = "jwst";
  } else if (satellite === "Kepler") {
    satname = "kepler";
  } else if (satellite === "Spitzer Space Telescope") {
    satname = "spitzer";
  } else if (satellite === "Hubble Space Telescope") {
    satname = "hubble";
  } else {
  }

  const sat = require(`./assets/${satname}.png`);

  return <img src={sat} alt="Satellite" className=" drop-shadow-2xl" />;
}

export function PlanetCard({ cardSatellite, planetTitle }) {
  const planet = require("./assets/gas-giant.png");
  return (
    <div className=" bg-slate-50  h-auto w-4/5 rounded-xl  border-solid border-4 border-sky-500 flex flex-col items-center justify-center">
      <div className="font-mochiy">{cardSatellite || "Exoplanet Types:"}</div>
      <div className="flex space-x-16">
        <Planet planet={planet} planetTitle={planetTitle} />
        <Planet planet={planet} planetTitle={planetTitle} />
        <Planet planet={planet} planetTitle={planetTitle} />
        <Planet planet={planet} planetTitle={planetTitle} />
        <Planet planet={planet} planetTitle={planetTitle} />
      </div>
    </div>
  );
}

export function Planet({ planet, planetTitle }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 size-40 mt-4 mb-4">
      <img src={planet} alt="Satellite" className=" drop-shadow-2xl h-2/3" />
      <div className=" font-kavoon text-violet-950 ">
        {planetTitle || "Un Named Planet"}
      </div>
    </div>
  );
}

// import "./assets/paper-plane.svg";
export default function App() {
  return (
    <div className="flex flex-col items-center space-y-7">
      <Title />
      <Search />
      <SatelliteCardBundle />
      <PlanetCard />
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
export function SatelliteCardBundle() {
  const satelliteArray = [
    "tess.png",
    "jwst.png",
    "kepler.png",
    "spitzer.png",
    "hubble.png",
  ];
  return (
    <div className="flex space-x-4 ">
      <SatelliteCard satellite={satelliteArray[0]} />
      <SatelliteCard satellite={satelliteArray[1]} />
      <SatelliteCard satellite={satelliteArray[2]} />
      <SatelliteCard satellite={satelliteArray[3]} />
      <SatelliteCard satellite={satelliteArray[4]} />
    </div>
  );
}

export function SatelliteCard({ satellite }) {
  return (
    <div className="bg-white p-4 rounded-xl h-22 w-24">
      <Satellite satellite={satellite} />
    </div>
  );
}

export function Satellite({ satellite }) {
  const sat = require(`./assets/${satellite}`);

  return <img src={sat} alt="Satellite" className=" drop-shadow-2xl" />;
}

export function PlanetCard() {
  const planet = require("./assets/gas-giant.png");
  return (
    <div className=" bg-slate-50  h-auto w-4/5 rounded-xl  border-solid border-4 border-sky-500 flex flex-col items-center justify-center">
      <div className="font-mochiy">Exoplanet Types:</div>
      <div className="flex space-x-16">
        <Planet planet={planet} />
        <Planet planet={planet} />
        <Planet planet={planet} />
        <Planet planet={planet} />
        <Planet planet={planet} />
      </div>
    </div>
  );
}

export function Planet({ planet }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 size-40 mt-4 mb-4">
      <img src={planet} alt="Satellite" className=" drop-shadow-2xl h-2/3" />
      <div className=" font-kavoon text-violet-950 ">Gas Giant</div>
    </div>
  );
}

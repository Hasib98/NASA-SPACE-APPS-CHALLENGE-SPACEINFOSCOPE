// import "./assets/paper-plane.svg";
export default function App() {
  return (
    <div className="flex flex-col items-center space-y-7">
      <Title />
      <SatelliteCardBundle />
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

  return <img src={sat} alt="Satellite" className="w-full h-full" />;
}

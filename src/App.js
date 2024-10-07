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
  return (
    <div className="flex space-x-4 ">
      <SatelliteCard />
      <SatelliteCard />
      <SatelliteCard />
      <SatelliteCard />
      <SatelliteCard />
    </div>
  );
}

export function SatelliteCard() {
  return <div className="bg-white p-4 rounded-lg w-14 text-center">card</div>;
}

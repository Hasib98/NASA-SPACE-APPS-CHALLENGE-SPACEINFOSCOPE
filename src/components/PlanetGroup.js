import Planet from "./Planet";
export default function PlanetGroup({ planetList, setPlanetName }) {
  // Split the array into chunks of 7
  const PlaentRows = [];
  for (let i = 0; i < planetList.length; i += 7) {
    PlaentRows.push(planetList.slice(i, i + 7));
  }

  return (
    <div className="rounded-xl border-solid border-4 border-gray-400  w-full">
      {PlaentRows.map((rowArray, index) => (
        <div key={index} className="flex ">
          {rowArray.map((planetTitle, idx) => (
            <Planet
              planetTitle={planetTitle}
              setPlanetName={setPlanetName}
              key={idx}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
// className="h-72 w-full rounded-xl border-solid border-4 border-gray-400  bg-black"

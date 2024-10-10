import Planet from "./Planet";
export default function Madarchod({ planetList }) {
  // Split the array into chunks of 7
  const PlaentRows = [];
  for (let i = 0; i < planetList.length; i += 7) {
    PlaentRows.push(planetList.slice(i, i + 7));
  }
  console.log(PlaentRows);

  return (
    <>
      {PlaentRows.map((rowArray, index) => (
        <div key={index} className="flex space-x-6">
          {rowArray.map((item, idx) => (
            <Planet planetTitle={item} key={idx} />
          ))}
        </div>
      ))}
    </>
  );
}

// // Example usage
// <div className="flex space-x-6">
//   {planetList.map((planetTitle, index) => (
//     <Planet planetTitle={planetTitle} key={index} />
//   ))}
// </div>;

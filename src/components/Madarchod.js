export default function Madarchod({ data }) {
  // Split the array into chunks of 7
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 7) {
    chunkedData.push(data.slice(i, i + 7));
  }

  return (
    <div>
      {chunkedData.map((chunk, index) => (
        <div key={index} className="row">
          {chunk.map((item, idx) => (
            <div key={idx} className="cell">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Example usage

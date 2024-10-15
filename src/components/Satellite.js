export default function Satellite({ satelliteName, size }) {
  if (!satelliteName) return;
  const sat = require(`../${satelliteName}.png`);

  return (
    <img
      src={sat}
      alt="Satellite"
      className={`object-contain opacity-85 ${size}`}
    />
  );
}

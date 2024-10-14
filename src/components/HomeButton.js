export default function HomeButton({ setPlanetName, setActiveSatellite }) {
  function handleClick() {
    setPlanetName(null);
    setActiveSatellite(null);
  }
  return (
    <button
      className=" px-4 py-1 rounded-3xl font-kavoon text-sm text-black bg-gradient-to-r from-amber-400 from-0% via-orange-300 to-red-200  outline outline-4 outline-amber-200"
      onClick={handleClick}
    >
      Home
    </button>
  );
}

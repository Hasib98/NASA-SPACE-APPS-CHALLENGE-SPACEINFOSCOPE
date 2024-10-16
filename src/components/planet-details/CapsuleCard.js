import Earth from "./Earth";
export default function CapsuleCard({ name, value, isEarth = false }) {
  if (!value) isEarth = false;
  return (
    <div className="bg-amber-200 min-w-72 h-8 rounded-lg font-kavoon text-indigo-950 flex items-center">
      <div className="bg-white min-w-40 h-8 rounded-lg flex items-center justify-center">
        {name}
      </div>

      <span className="pl-3">
        {/* {value} */}
        {value ? (isNaN(value) ? value : value.toFixed(2)) : "N/A"}
      </span>
      <span className="pl-3">{isEarth && "*"}</span>
      <span className="pl-3 pr-2">{isEarth && <Earth />}</span>
    </div>
  );
}

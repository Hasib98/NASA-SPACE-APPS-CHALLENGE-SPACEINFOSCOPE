import Satellite from "../Satellite";
export default function SatelliteCapsuleCard({ discoveredBy, discoveryYear }) {
  function satName(value) {
    if (value === "Transiting Exoplanet Survey Satellite (TESS)") {
      return "Tess";
    }
    if (value === "James Webb Space Telescope (JWST)") {
      return "JWST";
    }
    if (value === "Spitzer Space Telescope") {
      return "Spitzer";
    }
    if (value === "Hubble Space Telescope") {
      return "Hubble";
    }
    return value;
  }
  const satellite = satName(discoveredBy);
  console.log(discoveredBy);
  return (
    <div>
      <div className="text-white font-kavoon text-xl text-center">
        Discovered By
      </div>
      <div className="bg-green-200 min-w-72 h-28 rounded-lg font-kavoon text-indigo-950 flex items-center space-x-4">
        <div className="bg-white min-w-40 h-full rounded-lg flex flex-col items-center justify-center">
          <Satellite satelliteName={discoveredBy} size={"size-24"} />
          <div className="text-3xl text-sky-950">{satellite}</div>
        </div>
        <div className="relative top-2 flex flex-col items-center justify-center">
          <div className="w-20 text-center">Discoverd in</div>
          <div className="font-madimione text-4xl">{discoveryYear}</div>
        </div>
      </div>
    </div>
  );
}

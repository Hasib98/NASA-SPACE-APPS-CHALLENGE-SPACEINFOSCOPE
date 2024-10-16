export default function PlanetTitleDescription({ planetData }) {
  const { pl_name: planetName } = planetData || {};
  return (
    <div className="absolute top-[20vh] left-24 w-[22vw] text-white space-y-5">
      <div className=" font-kavoon text-5xl">{planetName}</div>
      <p className="font-andika  opacity-80">
        {`${planetName}, often called Earth's "cousin," is an exoplanet orbiting a
        Sun-like star about 1,400 light-years away in the constellation Cygnus.
        Slightly larger and older than Earth, it sits in its star's habitable
        zone, where conditions could allow liquid water to exist, raising
        intriguing possibilities about life beyond our planet.`}
      </p>
    </div>
  );
}

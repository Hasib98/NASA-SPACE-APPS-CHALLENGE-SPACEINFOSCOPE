import SatelliteCapsuleCard from "./SatelliteCapsuleCard";
import CapsuleCard from "./CapsuleCard";
export default function CardInfoSection({ planetData }) {
  const {
    disc_facility: discoveryFacility,
    disc_year: discoveryYear,
    pl_rade: planetRadius,
    discoverymethod: discoveryMethod,
    pl_masse: planetMass,
    pl_orbsmax: orbitSemiMajorAxis,
    pl_orbper: orbitalPeriod,
    pl_orbeccen: orbitalEccentricity,
  } = planetData || {}; // If planetData is null, it won't throw errors
  return (
    <div className=" absolute  right-20 top-16 space-y-3 ">
      <SatelliteCapsuleCard
        discoveredBy={discoveryFacility}
        discoveryYear={discoveryYear}
      />
      <CapsuleCard name="Planet Radius" value={planetRadius} isEarth={true} />
      <CapsuleCard
        name="Discovery Method"
        value={discoveryMethod}
        isEarth={false}
      />
      <CapsuleCard name="Planet Mass" value={planetMass} isEarth={true} />
      <CapsuleCard
        name="Orbital Radius"
        value={orbitSemiMajorAxis}
        isEarth={false}
      />
      <CapsuleCard name="Orbital Period" value={orbitalPeriod} isEarth={true} />
      <CapsuleCard
        name="Eccentricity"
        value={orbitalEccentricity}
        isEarth={false}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import CapsuleCard from "./CapsuleCard";
import SatelliteCapsuleCard from "./SatelliteCapsuleCard";

export default function ExoplanetInfo({ planetName }) {
  const [planetData, setPlanetData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the data from the API
    const fetchPlanetData = async () => {
      const encodedValue = encodeURIComponent(planetName);

      const url = `https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+1+pl_name,disc_facility,disc_year,pl_rade,discoverymethod,pl_masse,pl_orbsmax,pl_orbper,pl_orbeccen+FROM+ps+WHERE+pl_name='${encodedValue}'&format=json`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
          setPlanetData(data[0]); // API returns an array, so we get the first object
        } else {
          // setError("No data found for the planet");
        }
      } catch (error) {
        // setError("Error fetching data");
        // console.error("Fetch error:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchPlanetData();
  }, [planetName]); // Fetch data whenever the planetName changes

  const {
    pl_name: planetname,
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
    <div className="space-y-3">
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

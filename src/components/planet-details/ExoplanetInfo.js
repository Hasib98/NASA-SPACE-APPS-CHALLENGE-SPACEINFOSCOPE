import { useState, useEffect } from "react";

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

  // useEffect(() => {
  //   const encodedValue = encodeURIComponent(planetName);

  //   const url = `https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+1+pl_name,disc_facility,disc_year,pl_rade,discoverymethod,pl_masse,pl_orbsmax,pl_orbper,pl_orbeccen+FROM+ps+WHERE+pl_name='${encodedValue}'&format=json`;
  //   async function fecthPlanetData() {
  //     try {
  //       const res = await fetch(url);

  //       if (!res.ok) {
  //         console.log("no responspe");
  //       }
  //       const data = await res.json();
  //       setPlanetDetails(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fecthPlanetData();
  // }, [planetDetails]);

  // const encodedValue = encodeURIComponent(planetName);

  // const url = `https://corsproxy.io/?https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+TOP+1+pl_name,disc_facility,disc_year,pl_rade,discoverymethod,pl_masse,pl_orbsmax,pl_orbper,pl_orbeccen+FROM+ps+WHERE+pl_name='${encodedValue}'&format=json`;
  // async function fecthPlanetData() {
  //   try {
  //     const res = await fetch(url);

  //     if (!res.ok) {
  //       console.log("no responspe");
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //     setPlanetDetails(data[0]);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  // fecthPlanetData();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
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
    <div className="bg-black text-white">
      <h1>Exoplanet Information</h1>
      <div>
        <strong>Planet Name:</strong> {planetname}
      </div>
      <div>
        <strong>Discovery Facility:</strong> {discoveryFacility}
      </div>
      <div>
        <strong>Discovery Year:</strong> {discoveryYear}
      </div>
      <div>
        <strong>Planet Radius:</strong> {planetRadius}
      </div>
      <div>
        <strong>Discovery Method:</strong> {discoveryMethod}
      </div>
      <div>
        <strong>Planet Mass:</strong> {planetMass !== null ? planetMass : "N/A"}
      </div>
      <div>
        <strong>Orbit Semi-Major Axis:</strong> {orbitSemiMajorAxis}
      </div>
      <div>
        <strong>Orbital Period:</strong> {orbitalPeriod}
      </div>
      <div>
        <strong>Orbital Eccentricity:</strong>{" "}
        {orbitalEccentricity !== null ? orbitalEccentricity : "N/A"}
      </div>
    </div>
    // <div className="relative top-20 text-white bg-black w-full h-20">
    //   <div>{planetName}</div>

    //   <div>{discoveryFacility}</div>
    // </div>
  );
}

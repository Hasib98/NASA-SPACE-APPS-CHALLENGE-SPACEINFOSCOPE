import { useState, useEffect } from "react";
import CardInfoSection from "./CardInfoSection";
import PlanetTitleDescription from "./PlanetTitleDescription";

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

  return (
    <>
      <PlanetTitleDescription planetData={planetData} />;
      <CardInfoSection planetData={planetData} />;
    </>
  );
}

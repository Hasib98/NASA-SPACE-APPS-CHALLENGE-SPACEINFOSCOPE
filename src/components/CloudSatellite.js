export default function CloudSatellite({ activeSatellite }) {
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
  const sat = require(`../${activeSatellite}.png`);

  return (
    <div className="flex">
      <div className="relative right-20">
        <img src={sat} alt="Satellite" className="object-cover" />
      </div>
      <div className="relative flex justify-center -top-14">
        <div className="absolute">
          <svg
            width="300"
            height="200"
            id="sw-js-blob-svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {" "}
              <linearGradient
                id="sw-gradient"
                x1="0"
                x2="0.7"
                y1="0.4"
                y2="1.8"
              >
                {" "}
                <stop id="stop1" stopColor="#ababab" offset="0%"></stop>
                <stop id="stop2" stopColor="#ababab" offset="10%"></stop>
                <stop id="stop3" stopColor="#f0f0f0" offset="40%"></stop>
                <stop id="stop4" stopColor="#f0f0f0" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M48.6342 43.7034L60.5774 43.8232C64.2314 33.1168 71.6569 23.4417 82.01 15.8973C92.3631 8.35278 105.229 3.24144 119.145 1.14404C133.061 -0.953351 147.47 0.0472946 160.735 4.03228C173.999 8.01726 185.586 14.8268 194.181 23.6871C202.775 32.5474 208.032 43.1032 209.353 54.1551C210.675 65.207 208.008 76.3117 201.656 86.2076C195.304 96.1034 185.522 104.393 173.421 110.136C161.319 115.878 147.385 118.842 133.2 118.692L47.8909 117.837C35.3213 117.71 23.3057 113.684 14.4874 106.644C5.66902 99.6035 0.770303 90.1254 0.868874 80.2948C0.967444 70.4641 6.05523 61.0861 15.013 54.2239C23.9707 47.3617 36.0646 43.5774 48.6342 43.7034Z"
              //   width="100%"
              //   height="100%"
              //   transform="translate(50 50)"
              //   stroke-width="0"
            ></path>
          </svg>
        </div>
        <div className="absolute w-40 top-3">
          <p className="  text-3xl font-bold  text-orange-400 text-right">
            {satName(activeSatellite)}
          </p>
          <p className="  text-lg font-medium  text-cyan-800">
            Launch: April 18
          </p>
          <p className="  text-xl font-bold  text-cyan-800">2018</p>
        </div>
      </div>
    </div>
  );
}

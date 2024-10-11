export default function Planet({ planetTitle }) {
  // const planet = require(`../gas-giant.png`);
  return (
    <div className="flex flex-col items-center justify-center  mt-4 mb-4">
      <Globe />
      {/* <img src={planet} alt="Satellite" /> */}
      <div className=" font-mochiy text-slate-50  text-sm text-center">
        {planetTitle.pl_name
          ? planetTitle.pl_name > 8 || planetTitle.pl_name.slice(0, 8) + "..."
          : "Un Named Planet"}
      </div>
    </div>
  );
}

function Globe() {
  // function getRandomHexColor() {
  //   // Generate a random number between 0 and 16777215 (0xFFFFFF in hex)
  //   const randomColor = Math.floor(Math.random() * 16777215);
  //   // Convert the number to a hexadecimal string and pad with leading zeros if necessary
  //   const hexColor = "#" + randomColor.toString(16).padStart(6, "0");
  //   console.log(hexColor);
  //   return hexColor;
  // }
  function getRandomHexColor() {
    return "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
  }
  function generateNearbyHexColor(hexColor) {
    // Convert the hex color to an RGB object
    let r = parseInt(hexColor.slice(1, 3), 16);
    let g = parseInt(hexColor.slice(3, 5), 16);
    let b = parseInt(hexColor.slice(5, 7), 16);

    // Function to ensure the new color values are within the 0-255 range
    const clamp = (value) => Math.max(0, Math.min(255, value));

    // Generate small random variations in the RGB values (-20 to +20)
    r = clamp(r + Math.floor(Math.random() * 41 - 20));
    g = clamp(g + Math.floor(Math.random() * 41 - 20));
    b = clamp(b + Math.floor(Math.random() * 41 - 20));

    // Convert the RGB values back to a hex string
    const newHexColor = `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    return newHexColor;
  }
  const baseHex = getRandomHexColor();
  const color2 = generateNearbyHexColor(baseHex);
  const color3 = generateNearbyHexColor(baseHex);
  const color4 = generateNearbyHexColor(baseHex);
  const color5 = generateNearbyHexColor(baseHex);
  const color6 = generateNearbyHexColor(baseHex);

  return (
    <div>
      <svg
        width="140"
        height="162"
        viewBox="0 0 165 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <path
            d="M82.6628 0.129456C37.1893 0.129456 0.325684 36.2803 0.325684 80.8745C0.325684 125.469 37.1893 161.62 82.6628 161.62C128.136 161.62 165 125.469 165 80.8745C165 36.2803 128.136 0.129456 82.6628 0.129456Z"
            fill={color2}
          />
        </g>
        <g opacity="0.1">
          <path
            d="M82.6628 6.5312C40.7946 6.5312 6.85368 39.8158 6.85368 80.8745C6.85368 121.933 40.7946 155.218 82.6628 155.218C124.531 155.218 158.472 121.933 158.472 80.8745C158.472 39.8158 124.531 6.5312 82.6628 6.5312Z"
            fill={baseHex}
          />
        </g>
        <path
          d="M82.6628 13.0327C44.456 13.0327 13.4833 43.4065 13.4833 80.8745C13.4833 118.342 44.456 148.716 82.6628 148.716C120.87 148.716 151.842 118.342 151.842 80.8745C151.842 43.4065 120.87 13.0327 82.6628 13.0327Z"
          fill="url(#paint0_linear_56_215)"
        />
        <g opacity="0.43">
          <path
            d="M105.549 114.478C103.149 116.109 100.443 118.251 100.621 121.116C100.761 123.532 103.085 125.4 105.511 125.861C107.937 126.322 110.426 125.712 112.801 125.039C123.8 121.913 134.379 117.392 144.273 111.725C146.064 108.275 147.6 104.626 148.807 100.79C151.474 92.2704 152.325 83.6267 151.614 75.2571C138.57 90.6264 122.314 103.081 105.549 114.478Z"
            fill={color3}
          />
          <path
            d="M53.6296 85.6571C71.3594 74.373 90.3974 65.0442 107.276 52.5769C115.595 46.4242 123.457 39.3249 129.934 31.3164C125.616 27.3557 120.739 23.8933 115.379 21.0784C113.728 24.1673 111.62 27.0568 109.245 29.6101C103.225 36.0742 95.5665 40.8195 88.0097 45.4776C76.9476 52.3029 65.8855 59.1282 54.8234 65.9535C46.6951 70.9603 38.5541 75.9921 29.9432 80.1521C24.5963 82.7427 19.0462 84.997 13.839 87.8243C15.3122 101.736 21.1672 114.839 30.4131 125.313C33.8422 124.242 36.9792 122.449 40.1544 120.767C55.9156 112.435 73.0232 106.88 89.3814 99.7311C105.74 92.5945 121.768 83.5273 132.995 69.8518C137.58 64.272 141.301 57.9948 145.263 51.9417C142.634 46.4865 139.269 41.3799 135.255 36.7716C129.921 43.8585 124.803 51.1571 118.923 57.808C102.196 76.7519 79.2083 90.2903 54.3027 95.8577C53.02 96.1441 51.6229 96.4057 50.4164 95.8826C48.3589 94.9858 47.8762 92.1461 48.8415 90.1658C49.7813 88.173 51.7372 86.8528 53.6296 85.6571Z"
            fill={color4}
          />
          <path
            d="M82.6628 115.15C76.4142 113.444 57.5794 126.958 44.3074 137.345C49.7432 140.895 55.7759 143.747 62.3421 145.727C66.1395 146.873 69.9624 147.658 73.7852 148.143C77.2651 135.053 89.0385 116.882 82.6628 115.15Z"
            fill={color5}
          />
          <path
            d="M66.4189 14.9259C55.3441 24.9645 43.3422 34.069 29.016 38.0297C23.5421 44.6183 19.2367 52.3154 16.5315 60.9467C15.9853 62.6655 15.5535 64.3967 15.1471 66.1279C16.3664 65.8041 17.5729 65.4678 18.7668 65.0942C47.7746 56.0644 70.7117 35.2024 92.2136 13.6679C83.4375 12.4598 74.7123 12.958 66.4189 14.9259Z"
            fill={color3}
          />
        </g>
        <path
          opacity="0.22"
          d="M13.8136 86.8904C13.5977 79.6914 14.9185 72.48 17.9539 65.6174C30.4639 37.3946 67.2826 25.8863 100.202 39.9105C133.122 53.9347 149.671 88.1857 137.161 116.408C132.639 126.597 124.943 134.605 115.417 140.01C137.11 128.564 151.855 106.083 151.855 80.2394C151.855 42.7751 120.879 12.3977 82.6756 12.3977C44.4726 12.3977 13.4961 42.7751 13.4961 80.2394C13.4834 82.4938 13.5977 84.7108 13.8136 86.8904Z"
          fill={color3}
        />
        <defs>
          <linearGradient
            id="paint0_linear_56_215"
            x1="115.376"
            y1="36.179"
            x2="53.5928"
            y2="123.956"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color6} />
            <stop offset="1" stopColor={color3} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

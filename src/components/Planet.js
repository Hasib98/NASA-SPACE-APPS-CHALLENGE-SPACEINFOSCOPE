export default function Planet({ planetTitle, setPlanetName }) {
  // const planet = require(`../gas-giant.png`);
  return (
    <div
      className=" flex flex-col items-center justify-center hover:-translate-y-4 ease-in-out duration-200"
      onClick={() => setPlanetName(planetTitle.pl_name)}
    >
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
  function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in hex)
    const randomColor = Math.floor(Math.random() * 16777215);
    // Convert the number to a hexadecimal string and pad with leading zeros if necessary
    const hexColor = "#" + randomColor.toString(16).padStart(6, "0");

    return hexColor;
  }
  // function getRandomHexColor() {
  //   return "#000000".replace(/0/g, function () {
  //     return (~~(Math.random() * 16)).toString(16);
  //   });
  // }
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
  const baseHex1 = getRandomHexColor();
  const baseHex2 = getRandomHexColor();
  const color1 = generateNearbyHexColor(baseHex1);
  const color2 = generateNearbyHexColor(baseHex2);

  return (
    <div className="animate-ping repeat-1  delay-500 ease-in-out direction-reverse fill-mode-forwards">
      <svg
        width="165"
        height="162"
        viewBox="0 0 165 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <path
            d="M82.3372 6.10352e-05C127.811 6.10352e-05 164.674 36.1509 164.674 80.7451C164.674 125.339 127.811 161.49 82.3372 161.49C36.8636 161.49 0 125.339 0 80.7451C0 36.1509 36.8636 6.10352e-05 82.3372 6.10352e-05Z"
            fill={color1}
          />
        </g>
        <g opacity="0.1">
          <path
            d="M82.3372 6.40205C124.205 6.40205 158.146 39.6867 158.146 80.7453C158.146 121.804 124.205 155.089 82.3372 155.089C40.469 155.089 6.52808 121.804 6.52808 80.7453C6.52808 39.6867 40.469 6.40205 82.3372 6.40205Z"
            fill={color1}
          />
        </g>
        <path
          d="M82.3371 12.9035C120.544 12.9035 151.517 43.2773 151.517 80.7453C151.517 118.213 120.544 148.587 82.3371 148.587C44.1304 148.587 13.1577 118.213 13.1577 80.7453C13.1577 43.2773 44.1304 12.9035 82.3371 12.9035Z"
          fill="url(#paint0_linear_37_1779)"
        />
        <g opacity="0.43">
          <path
            d="M59.451 114.348C61.8514 115.98 64.5566 118.122 64.3787 120.987C64.239 123.403 61.9149 125.271 59.4891 125.732C57.0633 126.193 54.574 125.583 52.199 124.91C41.2004 121.784 30.6209 117.263 20.7272 111.596C18.9365 108.146 17.3997 104.497 16.1932 100.66C13.5261 92.1413 12.6751 83.4976 13.3864 75.1279C26.4298 90.4972 42.6864 102.952 59.451 114.348Z"
            fill={color2}
          />
          <path
            d="M111.37 85.5279C93.6406 74.2438 74.6026 64.9151 57.7237 52.4477C49.4049 46.295 41.5433 39.1957 35.0661 31.1872C39.3842 27.2266 44.2612 23.7641 49.6208 20.9493C51.2718 24.0381 53.3801 26.9277 55.7551 29.4809C61.7752 35.945 69.4335 40.6903 76.9903 45.3485C88.0524 52.1738 99.1145 58.999 110.177 65.8243C118.305 70.8312 126.446 75.863 135.057 80.0229C140.404 82.6135 145.954 84.8679 151.161 87.6951C149.688 101.607 143.833 114.71 134.587 125.184C131.158 124.113 128.021 122.32 124.846 120.638C109.084 112.306 91.9769 106.751 75.6186 99.602C59.2604 92.4653 43.2325 83.3982 32.0052 69.7227C27.4204 64.1429 23.6991 57.8656 19.7366 51.8126C22.3656 46.3573 25.7312 41.2508 29.7446 36.6425C35.0787 43.7293 40.1971 51.0279 46.0774 57.6788C62.8039 76.6227 85.7917 90.1612 110.697 95.7285C111.98 96.015 113.377 96.2765 114.584 95.7534C116.641 94.8567 117.124 92.0169 116.159 90.0366C115.219 88.0438 113.263 86.7236 111.37 85.5279Z"
            fill={color2}
          />
          <path
            d="M82.3372 115.021C88.5858 113.315 107.421 126.828 120.693 137.216C115.257 140.765 109.224 143.617 102.658 145.598C98.8605 146.744 95.0377 147.528 91.2148 148.014C87.7349 134.924 75.9616 116.752 82.3372 115.021Z"
            fill={color2}
          />
          <path
            d="M98.5812 14.7965C109.656 24.8351 121.658 33.9396 135.984 37.9003C141.458 44.4889 145.763 52.1861 148.469 60.8173C149.015 62.5361 149.447 64.2673 149.853 65.9985C148.634 65.6747 147.427 65.3384 146.233 64.9648C117.225 55.935 94.2884 35.073 72.7865 13.5385C81.5625 12.3304 90.2877 12.8286 98.5812 14.7965Z"
            fill={color2}
          />
        </g>
        <path
          opacity="0.22"
          d="M151.186 86.761C151.402 79.5621 150.081 72.3506 147.046 65.488C134.536 37.2652 97.7174 25.7569 64.7978 39.7811C31.8782 53.8053 15.3294 88.0563 27.8394 116.279C32.3608 126.467 40.0573 134.476 49.5826 139.881C27.8902 128.435 13.145 105.954 13.145 80.11C13.145 42.6457 44.1214 12.2683 82.3244 12.2683C120.527 12.2683 151.504 42.6457 151.504 80.11C151.517 82.3644 151.402 84.5814 151.186 86.761Z"
          fill={color2}
        />
        <defs>
          <linearGradient
            id="paint0_linear_37_1779"
            x1="49.6241"
            y1="36.0498"
            x2="111.407"
            y2="123.827"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.000434028" stopColor={baseHex1} />
            <stop offset="1" stopColor={baseHex2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

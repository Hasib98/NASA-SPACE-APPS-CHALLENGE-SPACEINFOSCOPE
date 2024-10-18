import { useState } from "react";

export default function Quiz({ planetData, setQuizModal }) {
  const [submit, setSubmit] = useState(false);

  const {
    pl_rade: planetRadius,
    discoverymethod: discoveryMethod,
    pl_orbper: orbitalPeriod,
  } = planetData || {}; // If planetData is null, it won't throw errors
  return (
    <div className="absolute top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 min-w-96 h-auto text-black font-karma font-semibold flex flex-col items-center gap-y-3 pb-3 pt-3">
      {/* <div className="bg-blue-500"> */}
      <div className="bg-white rounded-full w-auto p-3 text-center">
        🕑 10 :00 min
      </div>
      <div className="text-3xl text-[#001D35]">Pi Mansae C</div>
      {/* ................................... */}
      <div className=" w-4/5 flex flex-col items-center">
        <div className="self-start">1. What is Planet Radius?</div>
        <div className="grid grid-cols-2 gap-4 w-11/12">
          <div className="bg-white w-full  rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            B. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            C. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            D. 2.06
          </div>
        </div>
      </div>
      {/* ................................... */}
      {/* ................................... */}
      <div className=" w-4/5 flex flex-col items-center">
        <div className="self-start">1. What is Planet Radius?</div>
        <div className="grid grid-cols-2 gap-4 w-11/12">
          <div className="bg-white w-full  rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
        </div>
      </div>
      {/* ................................... */}
      {/* ................................... */}
      <div className=" w-4/5 flex flex-col items-center">
        <div className="self-start">1. What is Planet Radius?</div>
        <div className="grid grid-cols-2 gap-4 w-11/12">
          <div className="bg-white w-full  rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
          <div className="bg-white w-full rounded-lg h-8 pt-1 pl-2 flex items-center">
            A. 2.06
          </div>
        </div>
      </div>
      {/* ................................... */}
      {submit ? (
        <div>Hi</div>
      ) : (
        <button
          className="bg-[#FFEC44] rounded-2xl h-10 w-24 font-bold text-center [box-shadow:0_3px_5px_0px_#877e2f]"
          onClick={() => setSubmit(true)}
        >
          Submit
        </button>
      )}
      {/* </div> */}
      <button
        onClick={() => setQuizModal(false)}
        type="button"
        class="absolute right-3  bg-white rounded-full p-1 inline-flex items-center justify-center text-red-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
// 08CAEF
// 58DFEF

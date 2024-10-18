import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "../earth/Scene";

// import EarthModel from "../earth/EarthModel";
export default function ThreeD({ setEarthViewModal }) {
  return (
    <div className="absolute top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black w-[80vw] h-[90vh]">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          {/* <EarthModel /> */}
          <Model />
        </Suspense>
      </Canvas>
      <button
        onClick={() => setEarthViewModal(false)}
        type="button"
        class="absolute right-3 top-3  bg-white rounded-full p-1 inline-flex items-center justify-center text-red-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

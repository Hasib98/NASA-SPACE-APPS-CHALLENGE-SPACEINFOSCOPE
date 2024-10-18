import { useState } from "react";

export default function ButtonGroup() {
  const [quizModal, setQuizModal] = useState(false);
  function handleClick() {
    setQuizModal(true);
  }

  return (
    <div className=" absolute bottom-10 flex gap-x-5">
      {/* <Button>View 3D Model</Button>
      <Button>Take a Quiz</Button>
      <Button>Generate PDF</Button> */}
      <button
        className={`h-14 w-40  border-2 border-slate-100  rounded-lg  bg-gradient-to-r from-blue-500 to-blue-400 [box-shadow:0_5px_0px_0px_#6366f1] text-white font-madimione`}
      >
        View 3D Model
      </button>
      <button
        className={`h-14 w-40  border-2 border-slate-100  rounded-lg  bg-gradient-to-r from-red-500 to-red-400 [box-shadow:0_5px_0px_0px_#f43f5e] text-white font-madimione`}
        onClick={handleClick}
      >
        Take a Quiz
      </button>
      <button
        className={`h-14 w-40  border-2 border-slate-100  rounded-lg  bg-gradient-to-r from-blue-500 to-blue-400  [box-shadow:0_5px_0px_0px_#6366f1] text-white font-madimione`}
      >
        Generate PDF
      </button>
    </div>
  );
}

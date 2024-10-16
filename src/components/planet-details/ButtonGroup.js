import Button from "./Button";
export default function ButtonGroup() {
  return (
    <div className=" absolute bottom-10 flex gap-x-5">
      <Button>View 3D Model</Button>
      <Button>Take a Quiz</Button>
      <Button>Generate PDF</Button>
    </div>
  );
}

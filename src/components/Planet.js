export default function Planet({ planetTitle }) {
  const planet = require(`../gas-giant.png`);
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 size-28 mt-4 mb-4">
      <img src={planet} alt="Satellite" />
      <div className=" font-mochiy text-violet-950  text-sm text-center">
        {planetTitle.pl_name || "Un Named Planet"}
      </div>
    </div>
  );
}

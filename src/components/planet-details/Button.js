export default function Button({ children }) {
  const cssClass = `h-14 w-40  border-2 border-slate-100  rounded-lg bg-gradient-to-r from-${
    children === "Take a Quiz" ? "red" : "blue"
  }-500 to-${
    children === "Take a Quiz" ? "red" : "blue"
  }-400 [box-shadow:0_5px_0px_0px_#${
    children === "Take a Quiz" ? "f43f5e" : "6366f1"
  }] text-white font-madimione`;
  return <button className={cssClass}>{children}</button>;
}

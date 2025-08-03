import multiAvtar from "../assets/images/illustration-audience-growth.webp";
export function CardSix() {
  return (
    <div className=" card py-8 bg-Yellow-500/30 md:col-start-4 md:col-end-7 md:row-start-9 md:row-end-13 md:h-full md:w-full">
      <p className="text-6xl font-semibold">{">"}56%</p>
      <p className="text-2xl mb-6">faster audience growth</p>
      <img src={multiAvtar} className="w-[70%]" alt="" />
    </div>
  );
}

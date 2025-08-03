import calWeek from "../assets/images/illustration-consistent-schedule.webp";

export function CardThree() {
  return (
    <div className=" pt-8 card bg-Yellow-500 overflow-clip md:col-start-7 md:col-end-10 md:row-start-5 md:row-end-9 md:h-full md:w-full">
      <p className="text-3xl font-semibold mb-6">
        Maintain a consistent posting schedule.
      </p>
      <img src={calWeek} alt="" className="w-[70%] -mb-6" />
    </div>
  );
}

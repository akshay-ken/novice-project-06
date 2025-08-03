import calWeek from "../assets/images/illustration-consistent-schedule.webp";

export function CardThree() {
  return (
    <div className=" pt-8 card bg-Yellow-500 overflow-clip">
      <p className="text-3xl font-semibold mb-6">
        Maintain a consistent posting schedule.
      </p>
      <img src={calWeek} alt="" className="w-[70%] -mb-6" />
    </div>
  );
}

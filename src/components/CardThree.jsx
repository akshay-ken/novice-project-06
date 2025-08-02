import calWeek from "../assets/images/illustration-consistent-schedule.webp";

export function CardThree() {
  return (
    <div className=" pt-8 card bg-Yellow-500 overflow-clip">
      <p className="text-3xl font-semibold mb-6">
        Maintain a consistent posting schedule.
      </p>
      <div className="bg-[url('./assets/images/illustration-consistent-schedule.webp')] size-55 -mb-18 bg-Purple-500 bg-contain bg-no-repeat"></div>
      {/* <img src={calWeek} className=" float-left w-2/3 -mb-6" alt="" /> */}
    </div>
  );
}

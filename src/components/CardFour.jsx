import calSchedule from "../assets/images/illustration-schedule-posts.webp";
export function CardFour() {
  return (
    <div className="card bg-Purple-100 py-6 overflow-clip md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-9 md:h-full md:w-full">
      <p className="text-3xl font-semibold mb-6">Schedule to social media.</p>
      <img src={calSchedule} className="ml-28" alt="" />
      <p className="mt-4 text-xl text-center font-medium md:text-left">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}

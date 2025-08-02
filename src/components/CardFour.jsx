import calSchedule from "../assets/images/illustration-schedule-posts.webp";
export function CardFour() {
  return (
    <div className="card bg-Purple-100 py-6">
      <p className="text-3xl font-semibold mb-6">Schedule to social media.</p>
      <img src={calSchedule} alt="" />
      <p className="mt-4 text-xl text-center font-medium">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}

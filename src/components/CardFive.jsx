import growChart from "../assets/images/illustration-grow-followers.webp";
export function CardFive() {
  return (
    <div className="card py-8 bg-Purple-500 md:col-start-7 md:col-end-13 md: row-start-9 md:row-end-13 md:h-full md:w-full md:flex-row">
      <img
        src={growChart}
        alt=""
        className="md:w-[40%] md:self-start float-left -mr-6"
      />
      <p className="text-4xl text-center text-White font-medium mx-4 mt-6 ">
        Grow followers with non-stop content.
      </p>
    </div>
  );
}

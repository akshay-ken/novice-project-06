import fiveStars from "../assets/images/illustration-five-stars.webp";
export function CardOne() {
  return (
    <div className="bg-Purple-500 card px-12 py-8 md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-5 md:w-full md:h-full">
      <p className="text-White text-5xl font-medium text-center mb-6">
        Social Media <span className="text-Yellow-500">10x</span>{" "}
        <span className=" italic">Faster</span> with AI
      </p>
      <img src={fiveStars} alt="" />
      <p className="text-white  text-2xl text-nowrap text-center font-light mt-2">
        Over 4,000 5-star reviews
      </p>
    </div>
  );
}

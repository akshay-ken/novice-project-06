import growChart from "../assets/images/illustration-grow-followers.webp";
export function CardFive() {
  return (
    <div className="card py-8 bg-Purple-500">
      <img src={growChart} alt="" />
      <p className="text-4xl text-center text-White font-medium mx-4 mt-6">
        Grow followers with non-stop content.
      </p>
    </div>
  );
}

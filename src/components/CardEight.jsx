import imgChart from "../assets/images/illustration-ai-content.webp";
export function CardEight() {
  return (
    <div className="card py-8 bg-Yellow-500 md:row-start-7 md:row-end-13 md:col-start-1 md:col-end-4 md:h-full md:w-full">
      <p className="text-4xl font-semibold mb-4">
        Write your content using AI.
      </p>
      <img src={imgChart} className="w-[75%]" alt="" />
    </div>
  );
}

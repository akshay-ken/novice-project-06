import createPost from "../assets/images/illustration-create-post.webp";
export function CardSeven() {
  return (
    <div className="card bg-Purple-100 py-8 md:w-full md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-7 md:h-full ">
      <p className="text-4xl font-semibold">
        Create and schedule content{" "}
        <span className="text-Purple-500 italic">quicker</span>.
      </p>
      <img src={createPost} className="mt-6 w-[70%] mx-auto" alt="" />
    </div>
  );
}

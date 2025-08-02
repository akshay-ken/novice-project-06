import twoSocialSites from "../assets/images/illustration-multiple-platforms.webp";

export function CardTwo() {
  return (
    <div className=" py-8 card bg-Purple-100/60">
      <img src={twoSocialSites} alt="" />
      <p className="text-Black text-3xl font-medium  mt-8">
        Manage multiple accounts and platforms.
      </p>
    </div>
  );
}

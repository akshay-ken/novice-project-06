import twoSocialSites from "../assets/images/illustration-multiple-platforms.webp";

export function CardTwo() {
  return (
    <div className="px-6 py-8 rounded-2xl bg-Purple-100/60">
      <img src={twoSocialSites} alt="" />
      <p className="text-Black text-3xl font-medium  mt-8">
        Manage multiple accounts and platforms.
      </p>
    </div>
  );
}

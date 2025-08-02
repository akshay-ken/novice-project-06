import { CardFour } from "./CardFour";
import { CardOne } from "./CardOne";
import { CardThree } from "./CardThree";
import { CardTwo } from "./CardTwo";

export function MainPage() {
  return (
    <main className="w-full h-screen p-4 my-12 items-center gap-8 flex flex-col">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </main>
  );
}

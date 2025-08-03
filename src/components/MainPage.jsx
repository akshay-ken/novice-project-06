import { CardFive } from "./CardFive";
import { CardFour } from "./CardFour";
import { CardOne } from "./CardOne";
import { CardSix } from "./CardSix";
import { CardThree } from "./CardThree";
import { CardTwo } from "./CardTwo";

export function MainPage() {
  return (
    <main className="w-full  p-4 my-12 items-center gap-8 flex flex-col">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
    </main>
  );
}

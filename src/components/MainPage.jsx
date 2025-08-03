import { CardEight } from "./CardEight";
import { CardFive } from "./CardFive";
import { CardFour } from "./CardFour";
import { CardOne } from "./CardOne";
import { CardSeven } from "./CardSeven";
import { CardSix } from "./CardSix";
import { CardThree } from "./CardThree";
import { CardTwo } from "./CardTwo";

export function MainPage() {
  return (
    <main className="w-full md:grid md:grid-cols-12 md:grid-rows-12 h-dvh p-4 md:px-[10vw] md:gap-6 my-12 items-center gap-8 flex flex-col">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
      <CardSeven />
      <CardEight />
    </main>
  );
}

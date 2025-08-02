import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";

export function MainPage() {
  return (
    <main className="w-full h-screen p-4 gap-8 flex flex-col">
      <CardOne />
      <CardTwo />
    </main>
  );
}

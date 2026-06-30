import { Desk } from "./models/Desk";
import { Passport } from "./models/Passport";
import { AcceptanceLetter } from "./models/AcceptanceLetter";
import { BoardingPass } from "./models/BoardingPass";
import { CoffeeCup } from "./models/CoffeeCup";
import { Pen } from "./models/Pen";

export function Scene() {
  return (
    <>
      <Passport />
      <Desk />
      <AcceptanceLetter />
      <BoardingPass />
      <CoffeeCup />
      <Pen />
    </>
  );
}
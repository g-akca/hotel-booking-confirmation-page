import ArrivalCard from "./ArrivalCard";
import WifiCard from "./WifiCard";
import BreakfastCard from "./BreakfastCard";

function InfoCards() {
  return (
    <div className="flex flex-col gap-4.5">
      <ArrivalCard />
      <WifiCard />
      <BreakfastCard />
    </div>
  )
}

export default InfoCards;
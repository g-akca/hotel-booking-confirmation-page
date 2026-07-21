import WelcomeCard from "./WelcomeCard";
import ReceiptCard from "./ReceiptCard";

function BookingCards() {
  return (
    <div className="grid grid-rows-2">
      <WelcomeCard />

      <ReceiptCard />
    </div>
  )
}

export default BookingCards;
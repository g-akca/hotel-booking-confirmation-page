import WelcomeCard from "./WelcomeCard";
import ReceiptCard from "./ReceiptCard";

function BookingCards() {
  return (
    <div className="grid grid-rows-2 px-2 py-1.5 gap-1.5 tablet:px-6 tablet:py-8 tablet:gap-0 tablet:grid-rows-none tablet:grid-cols-2">
      <WelcomeCard />

      <ReceiptCard />
    </div>
  )
}

export default BookingCards;
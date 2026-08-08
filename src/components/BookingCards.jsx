import WelcomeCard from "./WelcomeCard";
import ReceiptCard from "./ReceiptCard";
import sparkleIcon from "/images/icon-sparkle.svg";

function BookingCards() {
  return (
    <div className="px-2 py-1.5 tablet:px-6 tablet:py-8 desktop:pt-6 desktop:pb-1 desktop:flex desktop:flex-col desktop:items-center desktop:gap-4">
      <div className="grid grid-rows-2 justify-items-center gap-1.5 tablet:gap-0 tablet:grid-rows-none tablet:grid-cols-2">
        <WelcomeCard />

        <ReceiptCard />
      </div>

      <div className="flex items-center gap-2">
        <img src={sparkleIcon} alt="" />
        <p className="text-neutral-600 text-[10px] leading-base font-mono tracking-[1px] uppercase">Hover to fan</p>
        <img src={sparkleIcon} alt="" />
      </div>
    </div>
  )
}

export default BookingCards;
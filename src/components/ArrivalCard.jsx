import keyIcon from "/images/icon-key.svg";

function ArrivalCard() {
  return (
    <div 
      className="
        px-4 py-5 rounded-2xl bg-neutral-50 border border-neutral-400 flex flex-col gap-5
        shadow-[0_1px_rgba(0,0,0,0.02),0_1px_1px_rgba(62,44,30,0.04),0_18px_40px_-28px_rgba(62,44,30,0.25)]
      "
    >
      <div className="flex gap-2.5 items-center">
        <div className="bg-terracotta-600 w-10 aspect-square rounded-lg flex justify-center items-center">
          <img src={keyIcon} alt="" />
        </div>
        
        <div className="grow flex justify-between items-center gap-3 text-terracotta-600">
          <h2 className="uppercase font-mono font-medium tracking-[2px]">Arrival</h2>

          <p className="text-[24px] leading-base font-fraunces tracking-[-0.2px]">01</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-neutral-900 text-[24px] leading-base font-fraunces tracking-[-0.2px]">Check-in from 15:00</p>

          <p className="text-neutral-600 text-[12px] leading-[120%] tracking-[0.4px]">Sat, 25 April</p>
        </div>

        <p>Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.</p>
      </div>
    </div>
  )
}

export default ArrivalCard;
import wifiIcon from "/images/icon-wifi.svg";

function WifiCard() {
  return (
    <div 
      className="
        px-4 py-5 rounded-2xl bg-neutral-50 border border-neutral-400 flex flex-col gap-5
        shadow-[0_1px_rgba(0,0,0,0.02),0_1px_1px_rgba(62,44,30,0.04),0_18px_40px_-28px_rgba(62,44,30,0.25)]
      "
    >
      <div className="flex gap-2.5 items-center">
        <div className="bg-blue-500 w-10 aspect-square rounded-lg flex justify-center items-center">
          <img src={wifiIcon} alt="" />
        </div>
        
        <div className="grow flex justify-between items-center gap-3 text-blue-500">
          <h2 className="uppercase font-mono font-medium tracking-[2px]">Wifi</h2>

          <p className="text-[24px] leading-base font-fraunces tracking-[-0.2px]">02</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-neutral-900 text-[24px] leading-base font-fraunces tracking-[-0.2px]">Le Soleil · Guest</p>

          <p className="text-neutral-600 text-[12px] leading-[120%] tracking-[0.4px]">Password below</p>
        </div>

        <div className="grid grid-rows-[repeat(2,minmax(32px,auto))] gap-1">
          <div className="bg-neutral-200 px-2.5 rounded-lg flex justify-between items-center gap-2 text-[12px]">
            <p className="uppercase text-neutral-600 font-mono tracking-[2px] leading-base">Network</p>

            <p className="text-neutral-900 leading-[120%] tracking-[0.4px]">Le Soleil · Guest</p>
          </div>

          <div className="bg-neutral-200 px-2.5 rounded-lg flex justify-between items-center gap-2 text-[12px]">
            <p className="uppercase text-neutral-600 font-mono tracking-[2px] leading-base">Password</p>

            <div className="flex items-center gap-1.5">
              <p className="text-neutral-900 leading-[120%] tracking-[0.4px]">soleil-2026</p>

              <p className="px-2 pt-1 pb-0.5 rounded-full border border-neutral-400 uppercase text-[10px] leading-base font-mono tracking-[1px]">Copy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WifiCard;
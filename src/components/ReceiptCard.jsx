import barcodeIcon from "/images/icon-barcode.svg";

function ReceiptCard() {
  return (
    <div 
      className="
        bg-neutral-50 p-6 rounded-[20px] text-neutral-900 flex flex-col gap-5 justify-between -rotate-2 w-full max-w-100
        shadow-[0_1px_rgba(0,0,0,0.03),0_16px_30px_-20px_rgba(62,44,30,0.35),0_20px_40px_-30px_rgba(62,44,30,0.16)] 
        tablet:order-1 tablet:justify-self-end tablet:-rotate-4 transition-all group-hover:rotate-5 group-hover:translate-x-[-22%]
      "
    >
      <div className="flex flex-col gap-5">
        <div className="pb-3 border-b border-b-neutral-400 border-dashed flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h2 className="text-[10px] leading-base tracking-[1px] text-neutral-600 font-mono uppercase">Receipt</h2>

            <p className="text-[20px] leading-base tracking-[-0.1px] font-fraunces">Your stay</p>
          </div>

          <div className="flex flex-col items-end gap-0.5 text-neutral-600 text-[10px] leading-base tracking-[1px] font-mono">
            <p>№ MS-2026</p>
            <p>0421-AH</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 text-center tablet:justify-center tablet:gap-20">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] leading-base tracking-[1px] text-neutral-600 font-mono uppercase">Check in</p>

            <div className="flex flex-col gap-1.5">
              <p className="text-[32px] leading-[120%] font-fraunces tracking-[-0.25px]">25 Apr</p>

              <div className="flex gap-1 text-[12px] leading-[120%] tracking-[0.4px] text-neutral-700">
                <p>Saturday</p>
                <p>·</p>
                <p>15:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] leading-base tracking-[1px] text-neutral-600 font-mono uppercase">Check out</p>

            <div className="flex flex-col gap-1.5">
              <p className="text-[32px] leading-[120%] font-fraunces tracking-[-0.25px]">29 Apr</p>

              <div className="flex gap-1 text-[12px] leading-[120%] tracking-[0.4px] text-neutral-700">
                <p>Wednesday</p>
                <p>·</p>
                <p>11:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-400 border-dashed flex flex-col gap-2">
          <div className="flex justify-between items-center gap-2">
            <p>Room · La Garrigue × 4 nights</p>
            <p className="font-mono text-[12px] leading-base">€ 620.00</p>
          </div>

          <div className="flex justify-between items-center gap-2">
            <p>Breakfast × 2 guests</p>
            <p className="font-mono text-[12px] leading-base">€ 96.00</p>
          </div>

          <div className="flex justify-between items-center gap-2 text-neutral-700">
            <p>Tourist tax</p>
            <p className="font-mono text-[12px] leading-base">€ 14.40</p>
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-600 flex justify-between items-center">
          <p className="text-neutral-600 font-mono text-[12px] leading-base tracking-[2px] uppercase">Total paid</p>
          <p className="text-[24px] leading-base font-fraunces tracking-[-0.2px]">€ 730.40</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="text-[10px] leading-base tracking-[1px] text-neutral-600 font-mono uppercase">Paid · Wise · GBP</p>

        <img src={barcodeIcon} alt="Barcode icon" className="h-7" />
      </div>
    </div>
  )
}

export default ReceiptCard;
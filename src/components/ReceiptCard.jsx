import barcodeIcon from "/images/icon-barcode.svg";

function ReceiptCard() {
  return (
    <div 
      className="
        bg-neutral-50 p-6 rounded-[20px] text-neutral-900 flex flex-col gap-5 justify-between
        shadow-[0_1px_rgba(0,0,0,0.03),0_16px_30px_-20px_rgba(62,44,30,0.35),0_20px_40px_-30px_rgba(62,44,30,0.16)]
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

        <div></div>

        <div></div>

        <div></div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="text-[10px] leading-base tracking-[1px] text-neutral-600 font-mono uppercase">Paid · Wise · GBP</p>

        <img src={barcodeIcon} alt="Barcode icon" className="h-7" />
      </div>
    </div>
  )
}

export default ReceiptCard;
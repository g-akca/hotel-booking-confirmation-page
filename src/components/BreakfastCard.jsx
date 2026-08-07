import breakfastIcon from "/images/icon-breakfast.svg";

function BreakfastCard() {
  return (
    <div 
      className="
        px-4 py-5 rounded-2xl bg-neutral-50 border border-neutral-400 flex flex-col gap-5
        shadow-[0_1px_rgba(0,0,0,0.02),0_1px_1px_rgba(62,44,30,0.04),0_18px_40px_-28px_rgba(62,44,30,0.25)]
        tablet:px-5 tablet:py-6 tablet:gap-6
      "
    >
      <div className="flex gap-2.5 items-center">
        <div className="bg-rose-500 w-10 aspect-square rounded-lg flex justify-center items-center">
          <img src={breakfastIcon} alt="" />
        </div>
        
        <div className="grow flex justify-between items-center gap-3 text-rose-500">
          <h2 className="uppercase font-mono font-medium tracking-[2px]">Breakfast</h2>

          <p className="text-[24px] leading-base font-fraunces tracking-[-0.2px]">03</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-neutral-900 text-[24px] leading-base font-fraunces tracking-[-0.2px]">Served 8 – 10:30</p>

          <p className="text-neutral-600 text-[12px] leading-[120%] tracking-[0.4px]">On the terrace</p>
        </div>

        <p>Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
      </div>
    </div>
  )
}

export default BreakfastCard;
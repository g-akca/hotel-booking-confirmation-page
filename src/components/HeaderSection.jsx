function HeaderSection() {
  return (
    <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between tablet:items-center">
      <div className="flex flex-col gap-1">
        <p className="uppercase text-[12px] leading-base font-mono tracking-[2px] text-neutral-600">Booking · Confirmed</p>

        <h1 className="text-neutral-900 text-[40px] leading-[120%] font-fraunces tracking-[-0.5px]">
          Bienvenue, <span className="text-terracotta-600 italic">Lucia.</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 leading-[120%] font-semibold tracking-[0.3px] tablet:flex">
        <button 
          type="button" 
          className="
            px-4 py-2.5 rounded-full border border-neutral-400 text-neutral-900 cursor-pointer transition-all hover:bg-neutral-200 
            focus:outline-none focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]
          "
        >
          Print receipt
        </button>
        
        <button 
          type="button" 
          className="
            px-4 py-2.5 rounded-full bg-neutral-900 text-sun-50 cursor-pointer transition-all hover:bg-neutral-800
            focus:outline-none focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]
          "
        >
          Add to calendar
        </button>
      </div>
    </div>
  )
}

export default HeaderSection;
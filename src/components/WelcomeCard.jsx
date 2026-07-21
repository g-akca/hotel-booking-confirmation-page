import sunIcon from "/images/icon-sun.svg";

function WelcomeCard() {
  return (
    <div 
      className="
        bg-[radial-gradient(circle_at_100%_0%,var(--color-terracotta-400)_0%,var(--color-terracotta-500)_40%,var(--color-terracotta-700)_80%)] 
        p-6 rounded-[20px] text-sun-50 flex flex-col gap-5 justify-between
        shadow-[0_10px_40px_rgba(194,90,46,0.35),0_50px_80px_rgba(169,66,31,0.25)]
      "
    >
      <div className="flex flex-col gap-5">
        <div className="pt-4 flex justify-between items-start border-t border-t-terracotta-400 border-dashed">
          <h2 className="text-[10px] leading-base tracking-[1px] font-mono uppercase">Welcome Card</h2>

          <img src={sunIcon} alt="Sun icon" className="w-12.25 aspect-square" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sun-200 text-[20px] leading-base italic font-fraunces tracking-[-0.1px]">A note from your host,</p>

            <p className="text-[40px] leading-[120%] italic font-fraunces tracking-[-0.5px]">Margaux.</p>
          </div>

          <p>We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[10px] leading-base tracking-[1px] font-mono uppercase">Room</p>

        <p className="text-[20px] leading-base tracking-[-0.1px] font-fraunces">La Garrigue</p>
      </div>
    </div>
  )
}

export default WelcomeCard;
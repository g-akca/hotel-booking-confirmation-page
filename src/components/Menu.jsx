import logoImg from "/images/logo.svg";
import closeIcon from "/images/icon-close.svg";
import weatherIcon from "/images/icon-weather.svg";

const baseUrl = import.meta.env.BASE_URL;

const navList = [
  {
    icon: `${baseUrl}images/icon-bed.svg`,
    label: "Your stay",
    isSelected: true,
  },
  {
    icon: `${baseUrl}images/icon-house.svg`,
    label: "The house",
  },
  {
    icon: `${baseUrl}images/icon-pin.svg`,
    label: "Around town",
  },
  {
    icon: `${baseUrl}images/icon-breakfast-outline.svg`,
    label: "Breakfast",
  },
  {
    icon: `${baseUrl}images/icon-mail.svg`,
    label: "Messages",
  },
];

function Menu({ closeMenu, isMenuOpen }) {
  return (
    <div 
      className={`
        fixed z-30 left-0 right-13.75 inset-y-0 max-w-[384px] bg-neutral-100 p-4 flex flex-col justify-between gap-4
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 tablet:px-6 
        desktop:translate-x-0 desktop:transition-none desktop:sticky desktop:h-screen desktop:border-r 
        desktop:border-neutral-400 desktop:px-4 desktop:py-5
      `}
    >
      <div className="flex flex-col gap-4">
        <div className="pb-4 flex justify-between items-center border-b border-neutral-400">
          <img src={logoImg} alt="Logo image" />

          <button 
            type="button" 
            onClick={closeMenu} 
            className="w-8 aspect-square rounded-sm border border-neutral-400 flex justify-center items-center desktop:hidden"
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="flex flex-col gap-0.5">
          {navList.map(item => (
            <button 
              key={item.label}
              type="button" 
              className={`
                px-3 py-2.5 flex items-center gap-2 rounded-lg leading-[120%] font-medium cursor-pointer transition-all 
                text-start hover:shadow-[0_1px_rgba(62,44,30,0.03)] hover:bg-white desktop:focus:outline-none
                desktop:focus:bg-white desktop:focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]
                ${item.isSelected && "bg-white text-neutral-900 shadow-[0_1px_rgba(62,44,30,0.03)]"}
              `}
            >
              <img src={item.icon} alt="" />

              <p className="grow">{item.label}</p>

              {item.isSelected && (
                <div 
                  className="
                    w-4 aspect-square rounded-full bg-terracotta-600 flex justify-center 
                    items-center text-neutral-100 text-[10px] leading-base font-fraunces
                  "
                >
                  1
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div 
          className="
            relative overflow-hidden rounded-2xl bg-sun-300 px-4 py-3 flex flex-col gap-1.5 
            shadow-[0_1px_rgba(0,0,0,0.04),0_10px_24px_-16px_rgba(194,90,46,0.4)]
          "
        >
          <img src={weatherIcon} alt="" className="absolute -top-7 -right-2.5 desktop:-right-3.5" />

          <p className="uppercase text-[10px] leading-base font-mono tracking-[1px]">Today in Cassis</p>
          <p className="text-neutral-900 font-fraunces text-[32px] leading-[120%] tracking-[-0.25px]">27°</p>
          <p className="text-[12px] leading-[120%] tracking-[0.4px]">Sunny · light breeze</p>
        </div>

        <div 
          className="
            pt-4 flex flex-col gap-2.5 border-t border-dashed border-neutral-400 
            text-neutral-600 text-[10px] leading-base uppercase font-mono tracking-[1px]
          "
        >
          <p>Est. 1987</p>
          <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
          <p>© 2026 Maison Soleil</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;
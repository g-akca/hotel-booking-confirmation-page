import logoImg from "/images/logo.svg";
import closeIcon from "/images/icon-close.svg";

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

function Menu() {
  return (
    <div className="fixed z-20 left-0 right-13.75 inset-y-0 bg-neutral-100 border border-neutral-400 p-4 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        <div className="pb-4.25 flex justify-between items-center border-b border-neutral-400">
          <img src={logoImg} alt="Logo image" />

          <button 
            type="button" 
            className="w-8 aspect-square rounded-sm border border-neutral-400 flex justify-center items-center"
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="flex flex-col gap-0.5">

        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="rounded-2xl bg-sun-300 px-4 py-3 flex flex-col gap-1.5 shadow-[0_1px_rgba(0,0,0,0.04),0_10px_24px_-16px_rgba(194,90,46,0.4)]">

        </div>

        <div className="pt-4 flex flex-col gap-2.5">

        </div>
      </div>
    </div>
  )
}

export default Menu;
import logoImg from "/images/logo.svg";
import menuIcon from "/images/icon-menu.svg";

function AppBar({ openMenu }) {
  return (
    <div className="p-4 border-b border-neutral-400 flex justify-between items-center">
      <img src={logoImg} alt="Logo image" />

      <button 
        type="button" 
        onClick={openMenu} 
        className="w-8 aspect-square rounded-sm border border-neutral-400 flex justify-center items-center"
      >
        <img src={menuIcon} alt="" />
      </button>
    </div>
  )
}

export default AppBar;
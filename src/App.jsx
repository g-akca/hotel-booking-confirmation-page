import { useState } from "react";
import AppBar from "./components/AppBar";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="
        text-base leading-base text-neutral-700 min-h-screen bg-neutral-100 flex flex-col gap-5 
        tablet:gap-6 desktop:grid desktop:grid-cols-[260px_auto] desktop:gap-0
      "
    >
      {isMenuOpen && (
        <button 
          type="button" 
          onClick={() => setIsMenuOpen(false)}
          className="fixed z-20 inset-0 bg-neutral-900/80 desktop:hidden" 
        />
      )}
      
      <Menu
        closeMenu={() => setIsMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      />
      
      <div className="desktop:hidden">
        <AppBar openMenu={() => setIsMenuOpen(true)} />
      </div>

      <MainSection />
    </div>
  )
}

export default App;
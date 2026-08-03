import { useState } from "react";
import AppBar from "./components/AppBar";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base text-neutral-700 relative min-h-screen bg-neutral-100 flex flex-col gap-5">
      <AppBar openMenu={() => setIsMenuOpen(true)} />

      <MainSection />

      {isMenuOpen && (
        <>
          <button 
            type="button" 
            onClick={() => setIsMenuOpen(false)}
            className="absolute z-10 inset-0 bg-neutral-900/80" 
          />
          
          <Menu />
        </>
      )}
    </div>
  )
}

export default App;
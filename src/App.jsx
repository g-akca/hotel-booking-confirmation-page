import { useState } from "react";
import AppBar from "./components/AppBar";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base text-neutral-700 min-h-screen bg-neutral-100 flex flex-col gap-5">
      <AppBar />

      <MainSection />

      {isMenuOpen && (
        <Menu />
      )}
    </div>
  )
}

export default App;
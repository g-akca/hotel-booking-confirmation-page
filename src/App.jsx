import AppBar from "./components/AppBar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="text-base leading-base text-neutral-700 min-h-screen bg-neutral-100 flex flex-col gap-5">
      <AppBar />

      <MainSection />
    </div>
  )
}

export default App;
import HeaderSection from "./HeaderSection";
import BookingCards from "./BookingCards";
import InfoCards from "./InfoCards";

function MainSection() {
  return (
    <main className="px-4 pb-10 flex flex-col gap-12 tablet:px-6 tablet:gap-10 desktop:px-10 desktop:py-8">
      <HeaderSection />

      <BookingCards />

      <InfoCards />
    </main>
  )
}

export default MainSection;
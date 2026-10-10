import HeroSection from "./components/home/hero/heroSection";
import MainSection from "./components/home/mainSetion/mainSection";

export default function Home() {
  return (
 <>
 <div className="py-5">
  <HeroSection/>
  <MainSection/>
 </div>
 </>
  );
}

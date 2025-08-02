import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Events from "@/components/events";
import Impact from "@/components/impact";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Donate from "@/components/donate";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Impact />
      <Team />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
}

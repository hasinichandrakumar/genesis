import Navigation from "@/components/navigation";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}
import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
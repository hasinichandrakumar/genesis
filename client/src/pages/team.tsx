import Navigation from "@/components/navigation";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
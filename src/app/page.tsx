import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridSection from "@/components/GridSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <GridSection />
      <Footer />
    </main>
  );
}

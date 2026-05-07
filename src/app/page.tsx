import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridSection from "@/components/GridSection";
import Footer from "@/components/footer";
import ImageProtection from "@/components/ImageProtection";

export default function Home() {
  return (
    <ImageProtection>
      <main className="relative">
        <Navbar />
        <Hero />
        <GridSection />
        <Footer />
      </main>
    </ImageProtection>
  );
}

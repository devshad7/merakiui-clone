import CompSec from "@/components/CompSec";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Templete from "@/components/Templete";

export default function Home() {
  return (
    <>
      <main className="dark:bg-gray-950">
        <Navbar />
        <Hero />
        <Features />
        <CompSec />
        <Templete />
        <Footer />
      </main>
    </>
  );
}

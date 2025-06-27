"use client";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <NavBar />
      <Hero />
      <Services />
      <CallToAction />
      <Footer />
    </main>
  );
}
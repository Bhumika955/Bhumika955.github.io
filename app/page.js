import Hero from "./components/Hero";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Skills/>
    </main>
  );
}
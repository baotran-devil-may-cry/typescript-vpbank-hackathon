import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Challenges from '@/components/Challenges';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Challenges />
        <Timeline />
        {/* Additional sections will be added here */}
      </main>
    </div>
  );
}

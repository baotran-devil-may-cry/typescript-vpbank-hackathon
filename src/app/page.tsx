import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Descriptions from '@/components/Descriptions';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Divider between Header and Descriptions */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
      <main className="flex-1">
        <Descriptions />
      </main>
      {/* Divider between Descriptions and Footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
      <Footer />
    </div>
  );
}

// import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { SriLankaMap } from '@/components/map/SriLankaMap';

export default function DiscoverPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <header className="p-4 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-md z-40 shadow-sm">
        <h1 className="text-2xl font-bold text-primary">Explore Sri Lanka</h1>
        {/* <ThemeSwitcher /> */}
      </header>
      <div className="flex-grow flex items-center justify-center">
        <SriLankaMap />
      </div>
      <footer className="p-4 text-center text-sm text-text/70">
        Aura of Lanka © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
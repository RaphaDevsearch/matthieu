export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <h1 className="font-bold text-slate-900">
          G. Matthieu
        </h1>

        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about">À propos</a></li>
            <li><a href="#education">Formation</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
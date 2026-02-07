export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-serif text-[#243123]">
          Lilac Template
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-sm text-[#243123]">
          <a
            href="/blog"
            className="hover:opacity-70 transition"
          >
            Blog
          </a>
          
          <a href="/contact" className="hover:opacity-70 transition">Contact</a>

        </nav>

      </div>
    </header>
  );
}

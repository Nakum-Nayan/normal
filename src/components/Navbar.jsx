const Navbar = () => {
  return (
    <nav className="text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Jay Ramapir</h1>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-6 font-medium">
          <li>
            <a href="/" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/calculator" className="hover:text-yellow-300 transition">
              Calculator
            </a>
          </li>

          <li>
            <a href="/materials" className="hover:text-yellow-300 transition">
              Materials
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
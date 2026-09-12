function Navbar() {
  return (
  
  <div className="navbar bg-base-100 shadow-sm px-8 py-3 flex justify-between items-center sticky top-0 z-50">
  {/* Logo Section */}
  <div className="flex items-center gap-2">
    <img src="/src/assets/logo-text.png" alt="Logo" className="h-9 w-auto" />
  </div>

  {/* Navigation Links */}
  <ul className="flex items-center gap-8 text-sm font-medium">
    <li>
      <a href="#" className="text-pink-500 font-semibold">Home</a>
    </li>
    <li>
      <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Technologies</a>
    </li>
    <li>
      <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Projects</a>
    </li>
    <li>
      <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
    </li>
    <li>
      <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
    </li>
  </ul>

  {/* Action Buttons */}
  <div className="flex items-center gap-4">
    <button className="btn btn-ghost text-gray-700 font-medium normal-case hover:bg-transparent rounded-4xl">
      Sign In
    </button>
    <button className="btn bg-pink-500 hover:bg-pink-600 text-white border-none rounded-full px-6 normal-case">
      Sign Up
    </button>
  </div>
</div>
  );
}

export default Navbar;

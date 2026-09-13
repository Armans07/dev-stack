import logo from "../assets/logo-text.png"
export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-100 text-start">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="DevStack Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-700 pt-2">
              <a href="#" className="">
                GitHub
              </a>
              <a href="#" className="">
                Twitter
              </a>
              <a href="#" className="">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Columns Container */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Menu, X, Car, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 🔹 Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/Lime.svg"
              alt="ParkEasy logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition"
            />
          </Link>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* PARK */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("park")}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Park <ChevronDown size={16} />
              </button>

              {openDropdown === "park" && (
                <div className="absolute top-full mt-3 w-48 bg-white rounded-xl shadow-xl border p-2 animate-fade-in">
                  <Link
                    to="/park-now"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Park now
                  </Link>
                  <Link
                    to="/book"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Book a Parking
                  </Link>
                  <Link
                    to="/subscriptions"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Subscriptions
                  </Link>
                </div>
              )}
            </div>

            {/* Partner */}
            <a
              href="https://business.parqie.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              Become a Partner
            </a>

            {/* ACCOUNT */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("account")}
                className="hover:text-primary transition"
              >
                My Account
              </button>

              {openDropdown === "account" && (
                <div className="absolute top-full mt-3 w-40 bg-white rounded-xl shadow-xl border p-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="hover:text-primary transition"
              >
                About
              </button>

              {openDropdown === "about" && (
                <div className="absolute top-full mt-3 w-44 bg-white rounded-xl shadow-xl border p-2">
                  <Link
                    to="/about"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Who we are
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/jobs"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* Download */}
            <Button variant="outline" size="sm">
              Download App
            </Button>

            {/* Language */}
            <div className="flex gap-2 text-xs bg-secondary px-2 py-1 rounded-lg">
              <button className="hover:text-primary">RO</button>
              <button className="hover:text-primary">EN</button>
              <button className="hover:text-primary">RU</button>
            </div>
          </div>

          {/* 🔹 Mobile Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-xl bg-white shadow-lg border flex flex-col gap-3 animate-fade-in">
            <Link to="/park-now">Park now</Link>
            <Link to="/book">Book a Parking</Link>
            <Link to="/subscriptions">Subscriptions</Link>

            <a href="https://business.parqie.com">Become a Partner</a>

            <Link to="/login">My Account</Link>

            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/contact">Contact</Link>

            <Button variant="outline">Download App</Button>

            <div className="flex gap-3 text-sm">
              <button>RO</button>
              <button>EN</button>
              <button>RU</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

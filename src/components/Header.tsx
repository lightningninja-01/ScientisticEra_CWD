import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about-vision-mission",
      dropdown: [
        { name: "Vision & Mission", href: "/about-vision-mission" },
        { name: "Our Founder", href: "/about-founder" },
        { name: "Founder's Achievements", href: "/about-founder#founder-achievements" },
        { name: "Our Team", href: "/about-team" },
        // { name: "Our Partner", href: "/about-partner" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Manuscript Writing Assistance", href: "/research_consultancy" },
        { name: "Intellectual Property (IPR)", href: "/ipr" },
        { name: "Other Pivotial Services", href: "/knowledge_latforms" },
        { name: "Collaboration & Institutional Support", href: "/collaboration" },
      ],
    },
    { name: "Webinars", href: "/webinars" },
    { name: "Journals", href: "/journals" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    // Added isButton property to differentiate this link
{ name: "Book Free Consultant", href: "https://wa.me/917068507857?text=Welcome%20to%20ScientisticEra!%20I%20would%20like%20to%20know%20more%20about%20your%20services.", target: "_blank", isButton: true },
  ];

  const isActive = (path) => router.pathname === path;

  const isDropdownActive = (dropdownItems) =>
    dropdownItems?.some((item) => item.href === router.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Image
              src="/New_Logo.png"
              alt="ScientisticEra Logo"
              width={200}
              height={200}
              className="object-contain w-24 sm:w-28 md:w-32 lg:w-40 xl:w-38"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 whitespace-nowrap">
                ScientisticEra
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500">Pvt Ltd</span>
            </div>
          </Link>

          {/* DESKTOP NAV — 1024px and above */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navigation.map((item) =>
              item.isButton ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="ml-4 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`px-2 xl:px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-all whitespace-nowrap ${
                      isDropdownActive(item.dropdown)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full mt-1 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="absolute -top-3 left-0 w-full h-3" />
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* TABLET NAV — 768px to 1023px */}
          <div className="hidden md:flex lg:hidden items-center gap-0.5">
            {navigation.map((item) =>
              item.isButton ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="ml-2 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow hover:shadow-md transition-all whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`px-1.5 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-0.5 transition-all whitespace-nowrap ${
                      isDropdownActive(item.dropdown)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3 shrink-0" />
                  </button>

                  <div className="absolute left-0 top-full mt-1 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="absolute -top-3 left-0 w-full h-3" />
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-xs transition-colors ${
                            isActive(subItem.href)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-1.5 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* MOBILE HAMBURGER — below 768px only */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* MOBILE MENU — below 768px only */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1 max-h-[75vh] overflow-y-auto">
            {navigation.map((item) =>
              item.isButton ? (
                <div key={item.name} className="pt-2 pb-1 px-4">
                  <Link
                    href={item.href}
                    className="block w-full px-4 py-3 text-center text-sm rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ) : item.dropdown ? (
                <div key={item.name}>
                  <button
                    className={`w-full px-4 py-3 font-medium rounded-lg flex justify-between items-center transition-colors ${
                      isDropdownActive(item.dropdown)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    <span className="text-sm">{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-blue-100 pl-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm rounded transition-colors ${
                            isActive(subItem.href)
                              ? "text-blue-600 font-medium bg-blue-50"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-sm rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

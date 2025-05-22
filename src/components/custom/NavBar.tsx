"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";
import { IconSearch, IconChevronDown, IconX } from "@tabler/icons-react";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../../lib/utils";

// Define the dataWisata type
interface TourismData {
  id: string;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  image: string;
  maps: string;
}

const dataWisata: TourismData[] = [];

const translations = {
  id: {
    home: "Beranda",
    roadmap: "Peta Belajar",
    articles: "Artikel",
    about: "Tentang", 
    search: "Cari",
    indonesia: "Indonesia",
    english: "Inggris",
    selectLanguage: "Pilih Bahasa",
  },
  en: {
    home: "Home",
    roadmap: "RoadMap",
    articles: "Articles",
    about: "About",
    search: "Search",
    indonesia: "Indonesian",
    english: "English",
    selectLanguage: "Select Language",
  },
};

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TourismData[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  const t = (key: string) => {
    return translations[language as keyof typeof translations][
      key as keyof (typeof translations)["id"]
    ];
  };

  const getNavItems = () => [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: t("roadmap"),
      link: "/roadmap",
    },
    {
      name: t("articles"),
      link: "/articles",
    },
    {
      name: t("about"),
      link: "/about",
    },
  ];

  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Add scroll event listener to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Filter data
    const filteredResults = dataWisata.filter((item) => {
      const nameToSearch =
        language === "id"
          ? item.nameId.toLowerCase()
          : item.nameEn.toLowerCase();
      const descToSearch =
        language === "id"
          ? item.descId.toLowerCase()
          : item.descEn.toLowerCase();

      return (
        nameToSearch.includes(query.toLowerCase()) ||
        descToSearch.includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  // Toggle search overlay
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 py-2">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={getNavItems()} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className={cn(
                "flex items-center transition-all duration-300",
                isScrolled ? "pr-2" : "pr-4"
              )}
              onClick={toggleSearch}
            >
              <IconSearch className="mr-2" size={18} />
              {!isScrolled && (
                <span className="transition-opacity duration-200">
                  {t("search")}
                </span>
              )}
            </NavbarButton>

            <div className="relative">
              <NavbarButton
                variant="primary"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center"
              >
                {language === "id" ? t("indonesia") : t("english")}
                <IconChevronDown className="ml-2" size={16} />
              </NavbarButton>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 dark:bg-neutral-800">
                  <div className="py-1">
                    <p className="px-4 py-2 text-xs text-gray-500">
                      {t("selectLanguage")}
                    </p>
                    <button
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        setLanguage("id");
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        language === "id"
                          ? "bg-gray-100 dark:bg-neutral-700 text-gray-400"
                          : ""
                      }`}
                    >
                      {t("indonesia")}
                    </button>
                    <button
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        setLanguage("en");
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        language === "en"
                          ? "bg-gray-100 dark:bg-neutral-700 text-gray-400"
                          : ""
                      }`}
                    >
                      {t("english")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {getNavItems().map(
              (item: { name: string; link: string }, idx: number) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              )
            )}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  toggleSearch();
                }}
                variant="primary"
                className="w-full flex justify-center items-center"
              >
                <IconSearch className="mr-2" size={18} />
                {t("search")}
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setLanguage(language === "id" ? "en" : "id");
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                {language === "id" ? t("indonesia") : t("english")}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Search Overlay with transition */}
      <div
        className={`fixed inset-0 bg-black z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {language === "id" ? "Pencarian" : "Search"}
            </h2>
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors"
            >
              <IconX size={24} />
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch className="text-gray-400" size={20} />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder={
                language === "id"
                  ? "Cari destinasi wisata..."
                  : "Search tourist destinations..."
              }
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {searchQuery.trim() !== "" && (
            <div
              className="transition-opacity duration-300 ease-in-out"
              style={{ opacity: searchQuery ? 1 : 0 }}
            >
              <h3 className="text-lg font-medium mb-4 text-white">
                {language === "id" ? "Hasil Pencarian" : "Search Results"}
                {searchResults.length > 0 && ` (${searchResults.length})`}
              </h3>

              {searchResults.length === 0 ? (
                <p className="text-gray-300">
                  {language === "id"
                    ? "Tidak ada hasil yang ditemukan. Coba dengan kata kunci lain."
                    : "No results found. Try with different keywords."}
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((item: TourismData) => (
                    <div
                      key={item.id}
                      className="border border-gray-700 rounded-lg overflow-hidden shadow-md bg-gray-800"
                    >
                      <div className="relative h-40">
                        <img
                          src={item.image}
                          alt={language === "id" ? item.nameId : item.nameEn}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-lg mb-2 text-white">
                          {language === "id" ? item.nameId : item.nameEn}
                        </h4>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                          {language === "id" ? item.descId : item.descEn}
                        </p>
                        <a
                          href={item.maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
                        >
                          {language === "id" ? "Lihat di Maps" : "View on Maps"}
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

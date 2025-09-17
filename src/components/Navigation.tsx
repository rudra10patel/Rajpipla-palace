import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchResults, type SearchResult } from "./SearchResults";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Virtual Tour", href: "/virtual-tour" },
  { name: "Digital Archive", href: "/archive" },
  { name: "Audio Tour", href: "/audio-tour" },
  { name: "Visit", href: "/visit" },
  { name: "AI Guide", href: "/ai-guide" },
  { name: "Emergency", href: "/emergency" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const location = useLocation();

  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const searchableContent = [
      ...navigation.map(item => ({
        title: item.name,
        href: item.href,
        description: `Navigate to ${item.name} page`
      })),
      {
        title: "Virtual Tour",
        href: "/virtual-tour",
        description: "Experience an immersive 3D tour of Rajpipla Palace"
      },
      {
        title: "Digital Archive",
        href: "/archive",
        description: "Explore historical documents and photographs"
      },
      {
        title: "Audio Tour",
        href: "/audio-tour",
        description: "Listen to guided audio tours in multiple languages"
      }
    ];

    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      (item.description?.toLowerCase().includes(term.toLowerCase()))
    );

    setSearchResults(results);
  }, []);

  useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm, performSearch]);

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-heritage-cream/95 backdrop-blur-md border-b border-heritage-stone/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-heritage-royal rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-heritage-cream" />
            </div>
            <span className="text-xl font-bold text-heritage-royal">Rajpipla Palace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth ${
                  location.pathname === item.href
                    ? "text-heritage-royal border-b-2 border-heritage-royal"
                    : "text-muted-foreground hover:text-heritage-royal"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Search Input */}
{searchOpen && (
  <div className="relative">
    <div className="py-4 border-t border-heritage-stone/20">
      <form onSubmit={(e) => {
        e.preventDefault();
        performSearch(searchTerm);
      }}>
        <Input
          type="search"
          placeholder="Search..."
          className="w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleCloseSearch();
            }
          }}
        />
      </form>
    </div>
    <SearchResults results={searchResults} onClose={handleCloseSearch} />
  </div>
)}        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-heritage-stone/20">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth ${
                    location.pathname === item.href
                      ? "text-heritage-royal"
                      : "text-muted-foreground hover:text-heritage-royal"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
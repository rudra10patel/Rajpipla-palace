import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Virtual Tour", href: "/virtual-tour" },
  { name: "Digital Archive", href: "/archive" },
  { name: "Visit", href: "/visit" },
  { name: "Community", href: "/community" },
  { name: "AI Guide", href: "/ai-guide" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            <Button variant="heritage" size="sm">
              Book Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
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
              <Button variant="heritage" size="sm" className="w-fit">
                Book Visit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
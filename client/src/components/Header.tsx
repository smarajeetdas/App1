import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <Link href="/" className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Relay
            </Link>
            <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 -mt-1 hidden md:block">
              AI Powered
            </span>
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-xs text-neutral-700/70 hidden md:block">
              Quality Driven Next-Gen Automation
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="#functional" className="hover:text-primary transition-colors">
            Functional Automation
          </Link>
          <Link href="#performance" className="hover:text-primary transition-colors">
            Performance Lab
          </Link>
          <Link href="#mobile" className="hover:text-primary transition-colors">
            Mobile Automation
          </Link>
          <Link href="#desktop" className="hover:text-primary transition-colors">
            Desktop Automation
          </Link>
          <Link href="#chaos" className="hover:text-primary transition-colors">
            Chaos Simulator
          </Link>
          <Link href="#ai-features" className="hover:text-primary transition-colors">
            AI Features
          </Link>
        </div>

        <div className="flex items-center">
          <Button className="hidden md:block" variant="gradient">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-neutral-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 py-2 border-b mb-2">
            <p className="text-xs text-neutral-700/70">Quality Driven Next-Gen Automation</p>
            <p className="text-xs font-semibold text-primary">AI Powered</p>
          </div>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="#functional" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                Functional Automation
            </Link>
            <Link href="#performance" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                Performance Lab
            </Link>
            <Link href="#mobile" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                Mobile Automation
            </Link>
            <Link href="#desktop" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                Desktop Automation
            </Link>
            <Link href="#chaos" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                Chaos Simulator
            </Link>
            <Link href="#ai-features" className="hover:text-primary transition-colors py-2" onClick={closeMobileMenu}>
                AI Features
            </Link>
            <Button variant="gradient" className="self-start">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

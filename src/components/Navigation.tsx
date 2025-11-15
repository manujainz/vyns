import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Sparkles } from "lucide-react";
import vynsLogo from "@/assets/vyns-logo.svg";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-card border-b shadow-lg shadow-black/5' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <div className="relative">
            <img 
              src={vynsLogo} 
              alt="Vyns" 
              className="h-8 lg:h-10 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a 
              href="#features" 
              className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Features
            </a>
            <a 
              href="#technology" 
              className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Technology
            </a>
            <a 
              href="#lifestyle" 
              className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Lifestyle
            </a>
            <a 
              href="#community" 
              className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Community
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-foreground hover:bg-secondary/50 rounded-xl transition-all hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Pre-Order
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-foreground hover:bg-secondary/50 rounded-xl transition-all"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

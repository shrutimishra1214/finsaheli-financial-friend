import { Button } from "@/components/ui/button";
import { Building2, Menu, X, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.features'), href: "#features" },
    { label: t('nav.privacy'), href: "#privacy" },
    { label: t('nav.support'), href: "#support" },
    { label: t('nav.resources'), href: "#resources" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/a0110b81-b651-4e14-ba11-7ef2ffa2e339.png" 
                alt="FinSaheli Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground font-hindi">{t('nav.brandName')}</span>
              <span className="text-xs text-muted-foreground">{t('nav.subtitle')}</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-blue-600 transition-colors font-hindi"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageDropdown />
            <Button variant="outline" size="sm" className="gap-2 border-destructive/20 text-destructive hover:bg-destructive/10">
              <Shield className="w-4 h-4" />
              <span className="font-hindi">{t('nav.exitNow')}</span>
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-hindi"
              onClick={() => navigate('/chat')}
            >
              {t('nav.start')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-soft">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-blue-600 transition-colors py-2 font-hindi"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <LanguageDropdown />
                <Button variant="outline" size="sm" className="w-full gap-2 border-destructive/20 text-destructive hover:bg-destructive/10 font-hindi">
                  <Shield className="w-4 h-4" />
                  {t('nav.exitNow')}
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-hindi"
                  onClick={() => navigate('/chat')}
                >
                  {t('nav.start')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
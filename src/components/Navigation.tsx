import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo - Always stays left */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/a0110b81-b651-4e14-ba11-7ef2ffa2e339.png" 
                alt="FinSaheli Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-hindi">{t('nav.brandName')}</span>
              <span className="text-sm text-muted-foreground">{t('nav.subtitle')}</span>
            </div>
          </div>
          
          {/* Spacer to push CTA to right */}
          <div className="flex-1"></div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageDropdown />
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
            className="md:hidden p-2 rounded-lg hover:bg-accent ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-soft">
            <div className="p-4 space-y-4">
              <div className="flex flex-col gap-2">
                <LanguageDropdown />
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
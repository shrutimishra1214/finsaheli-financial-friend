import { Building2, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-background mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-16 border-t border-background/20">
          <p className="text-background/70 text-sm">
            © 2024 FinSaheli
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FinSaheli</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Empowering women with financial independence through trusted, private guidance.
            </p>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Financial Planning</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Legal Aid</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Mental Health</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Crisis Support</a></li>
            </ul>
          </div>
          
          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Emergency Help</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <span>181 - Women's Helpline</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Shield className="w-4 h-4" />
                <span>100 - Police Emergency</span>
              </div>
              <Button variant="safe" size="sm" className="w-full mt-4">
                Quick Exit Site
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 FinSaheli. Supporting women's financial independence with privacy and care.
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-sage" />
            <span>for every saheli</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
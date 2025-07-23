import { Building2, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-hindi">बैंक ऑफ इंडिया</span>
                <span className="text-xs text-background/70">महिला वित्तीय सहायता केंद्र</span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed font-hindi">
              भारत की अग्रणी सार्वजनिक बैंक द्वारा महिलाओं के लिए विशेष वित्तीय परामर्श और सहायता सेवा।
            </p>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">सहायता</h3>
            <ul className="space-y-2 text-background/70 font-hindi">
              <li><a href="#" className="hover:text-background transition-colors">यह कैसे काम करता है</a></li>
              <li><a href="#" className="hover:text-background transition-colors">गोपनीयता नीति</a></li>
              <li><a href="#" className="hover:text-background transition-colors">सुरक्षा</a></li>
              <li><a href="#" className="hover:text-background transition-colors">पूछे जाने वाले प्रश्न</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">बैंकिंग सेवाएं</h3>
            <ul className="space-y-2 text-background/70 font-hindi">
              <li><a href="#" className="hover:text-background transition-colors">महिला बचत खाता</a></li>
              <li><a href="#" className="hover:text-background transition-colors">व्यक्तिगत ऋण</a></li>
              <li><a href="#" className="hover:text-background transition-colors">बीमा योजनाएं</a></li>
              <li><a href="#" className="hover:text-background transition-colors">निवेश सलाह</a></li>
            </ul>
          </div>
          
          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">आपातकालीन सहायता</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70 font-hindi">
                <Phone className="w-4 h-4" />
                <span>181 - महिला हेल्पलाइन</span>
              </div>
              <div className="flex items-center gap-2 text-background/70 font-hindi">
                <Shield className="w-4 h-4" />
                <span>1800-258-4455 - BOI हेल्पलाइन</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 border-white/20 text-white hover:bg-white/10 font-hindi">
                तुरंत साइट से निकलें
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm font-hindi">
            © 2024 बैंक ऑफ इंडिया। महिलाओं की वित्तीय सुरक्षा और स्वतंत्रता हमारा लक्ष्य।
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70 font-hindi">
            <span>आरबीआई लाइसेंस प्राप्त</span>
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>भारत सरकार के स्वामित्व में</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
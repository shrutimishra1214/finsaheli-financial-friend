import { Building2, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
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
                <span className="text-lg font-bold font-hindi">{t('footer.bankName')}</span>
                <span className="text-xs text-background/70">{t('footer.subtitle')}</span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed font-hindi">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">{t('footer.support')}</h3>
            <ul className="space-y-2 text-background/70 font-hindi">
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.howItWorks')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.security')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.faq')}</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">{t('footer.bankingServices')}</h3>
            <ul className="space-y-2 text-background/70 font-hindi">
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.womenSavings')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.personalLoan')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.insurance')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.investment')}</a></li>
            </ul>
          </div>
          
          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-hindi">{t('footer.emergency')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70 font-hindi">
                <Phone className="w-4 h-4" />
                <span>{t('footer.womenHelpline')}</span>
              </div>
              <div className="flex items-center gap-2 text-background/70 font-hindi">
                <Shield className="w-4 h-4" />
                <span>{t('footer.boiHelpline')}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 border-white/20 text-white hover:bg-white/10 font-hindi">
                {t('footer.exitSite')}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm font-hindi">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70 font-hindi">
            <span>{t('footer.rbiLicensed')}</span>
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>{t('footer.govOwned')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
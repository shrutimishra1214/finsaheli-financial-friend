import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hi: {
    // Navigation
    'nav.features': 'सुविधाएं',
    'nav.privacy': 'गोपनीयता',
    'nav.support': 'सहायता',
    'nav.resources': 'संसाधन',
    'nav.bankName': 'बैंक ऑफ इंडिया',
    'nav.subtitle': 'महिला वित्तीय सहायता',
    'nav.exitNow': 'तुरंत निकलें',
    'nav.start': 'शुरू करें',
    
    // Hero
    'hero.certified': 'बैंक ऑफ इंडिया द्वारा प्रमाणित सेवा',
    'hero.title': 'महिला वित्तीय सशक्तिकरण',
    'hero.titleHighlight': 'केंद्र',
    'hero.description': 'बैंक ऑफ इंडिया की तरफ से महिलाओं के लिए विशेष वित्तीय परामर्श सेवा। तलाक, नौकरी खोने या किसी भी वित्तीय संकट में हम आपके साथ हैं।',
    'hero.startConsultation': 'सलाह शुरू करें',
    'hero.moreInfo': 'अधिक जानकारी',
    'hero.confidential': '100% गुप्त',
    'hero.bankSecured': 'बैंक द्वारा सुरक्षित',
    
    // Footer
    'footer.bankName': 'बैंक ऑफ इंडिया',
    'footer.subtitle': 'महिला वित्तीय सहायता केंद्र',
    'footer.description': 'भारत की अग्रणी सार्वजनिक बैंक द्वारा महिलाओं के लिए विशेष वित्तीय परामर्श और सहायता सेवा।',
    'footer.support': 'सहायता',
    'footer.howItWorks': 'यह कैसे काम करता है',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.security': 'सुरक्षा',
    'footer.faq': 'पूछे जाने वाले प्रश्न',
    'footer.bankingServices': 'बैंकिंग सेवाएं',
    'footer.womenSavings': 'महिला बचत खाता',
    'footer.personalLoan': 'व्यक्तिगत ऋण',
    'footer.insurance': 'बीमा योजनाएं',
    'footer.investment': 'निवेश सलाह',
    'footer.emergency': 'आपातकालीन सहायता',
    'footer.womenHelpline': '181 - महिला हेल्पलाइन',
    'footer.boiHelpline': '1800-258-4455 - BOI हेल्पलाइन',
    'footer.exitSite': 'तुरंत साइट से निकलें',
    'footer.copyright': '© 2024 बैंक ऑफ इंडिया। महिलाओं की वित्तीय सुरक्षा और स्वतंत्रता हमारा लक्ष्य।',
    'footer.rbiLicensed': 'आरबीआई लाइसेंस प्राप्त',
    'footer.govOwned': 'भारत सरकार के स्वामित्व में'
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',
    'nav.resources': 'Resources',
    'nav.bankName': 'Bank of India',
    'nav.subtitle': 'Women Financial Support',
    'nav.exitNow': 'Exit Now',
    'nav.start': 'Get Started',
    
    // Hero
    'hero.certified': 'Certified Service by Bank of India',
    'hero.title': 'Women Financial Empowerment',
    'hero.titleHighlight': 'Center',
    'hero.description': 'Special financial counseling service for women by Bank of India. We are with you during divorce, job loss, or any financial crisis.',
    'hero.startConsultation': 'Start Consultation',
    'hero.moreInfo': 'Learn More',
    'hero.confidential': '100% Confidential',
    'hero.bankSecured': 'Bank Secured',
    
    // Footer
    'footer.bankName': 'Bank of India',
    'footer.subtitle': 'Women Financial Support Center',
    'footer.description': 'Special financial counseling and support service for women by India\'s leading public bank.',
    'footer.support': 'Support',
    'footer.howItWorks': 'How It Works',
    'footer.privacy': 'Privacy Policy',
    'footer.security': 'Security',
    'footer.faq': 'FAQ',
    'footer.bankingServices': 'Banking Services',
    'footer.womenSavings': 'Women Savings Account',
    'footer.personalLoan': 'Personal Loan',
    'footer.insurance': 'Insurance Plans',
    'footer.investment': 'Investment Advice',
    'footer.emergency': 'Emergency Support',
    'footer.womenHelpline': '181 - Women Helpline',
    'footer.boiHelpline': '1800-258-4455 - BOI Helpline',
    'footer.exitSite': 'Exit Site Immediately',
    'footer.copyright': '© 2024 Bank of India. Women\'s financial security and independence is our goal.',
    'footer.rbiLicensed': 'RBI Licensed',
    'footer.govOwned': 'Government of India Owned'
  },
  mr: {
    // Navigation
    'nav.features': 'वैशिष्ट्ये',
    'nav.privacy': 'गोपनीयता',
    'nav.support': 'सहाय्य',
    'nav.resources': 'संसाधने',
    'nav.bankName': 'बँक ऑफ इंडिया',
    'nav.subtitle': 'महिला आर्थिक सहाय्य',
    'nav.exitNow': 'ताबडतोब बाहेर पडा',
    'nav.start': 'सुरुवात करा',
    
    // Hero
    'hero.certified': 'बँक ऑफ इंडियाने प्रमाणित सेवा',
    'hero.title': 'महिला आर्थिक सशक्तीकरण',
    'hero.titleHighlight': 'केंद्र',
    'hero.description': 'बँक ऑफ इंडियाकडून महिलांसाठी विशेष आर्थिक सल्ला सेवा. घटस्फोट, नोकरी गमावणे किंवा कोणत्याही आर्थिक संकटात आम्ही तुमच्यासोबत आहोत.',
    'hero.startConsultation': 'सल्ला सुरू करा',
    'hero.moreInfo': 'अधिक माहिती',
    'hero.confidential': '१००% गुप्त',
    'hero.bankSecured': 'बँकेद्वारे सुरक्षित',
    
    // Footer
    'footer.bankName': 'बँक ऑफ इंडिया',
    'footer.subtitle': 'महिला आर्थिक सहाय्य केंद्र',
    'footer.description': 'भारताच्या आघाडीच्या सार्वजनिक बँकेकडून महिलांसाठी विशेष आर्थिक सल्ला आणि सहाय्य सेवा.',
    'footer.support': 'सहाय्य',
    'footer.howItWorks': 'हे कसे कार्य करते',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.security': 'सुरक्षा',
    'footer.faq': 'वारंवार विचारले जाणारे प्रश्न',
    'footer.bankingServices': 'बँकिंग सेवा',
    'footer.womenSavings': 'महिला बचत खाते',
    'footer.personalLoan': 'वैयक्तिक कर्ज',
    'footer.insurance': 'विमा योजना',
    'footer.investment': 'गुंतवणूक सल्ला',
    'footer.emergency': 'आपत्कालीन सहाय्य',
    'footer.womenHelpline': '१८१ - महिला हेल्पलाइन',
    'footer.boiHelpline': '१८००-२५८-४४५५ - BOI हेल्पलाइन',
    'footer.exitSite': 'ताबडतोब साइटवरून बाहेर पडा',
    'footer.copyright': '© २०२४ बँक ऑफ इंडिया. महिलांची आर्थिक सुरक्षा आणि स्वातंत्र्य हे आमचे ध्येय.',
    'footer.rbiLicensed': 'RBI परवानाधारक',
    'footer.govOwned': 'भारत सरकारच्या मालकीचे'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
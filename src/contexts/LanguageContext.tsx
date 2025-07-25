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
    'nav.brandName': 'FinSaheli',
    'nav.subtitle': 'महिला वित्तीय सहायता',
    'nav.exitNow': 'तुरंत निकलें',
    'nav.start': 'शुरू करें',
    
    // Hero
    'hero.certified': 'FinSaheli द्वारा प्रमाणित सेवा',
    'hero.title': 'महिला वित्तीय सशक्तिकरण',
    'hero.titleHighlight': 'केंद्र',
    'hero.description': 'FinSaheli की तरफ से महिलाओं के लिए विशेष वित्तीय परामर्श सेवा। तलाक, नौकरी खोने या किसी भी वित्तीय संकट में हम आपके साथ हैं।',
    'hero.startConsultation': 'सलाह शुरू करें',
    'hero.moreInfo': 'अधिक जानकारी',
    'hero.confidential': '100% गुप्त',
    'hero.secure': 'सुरक्षित प्लेटफॉर्म',
    
    // Footer
    'footer.brandName': 'FinSaheli',
    'footer.subtitle': 'महिला वित्तीय सहायता केंद्र',
    'footer.description': 'महिलाओं के लिए विशेष वित्तीय परामर्श और सहायता सेवा।',
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
    'footer.financeHelpline': '1800-XXX-XXXX - FinSaheli हेल्पलाइन',
    'footer.exitSite': 'तुरंत साइट से निकलें',
    'footer.copyright': '© 2024 FinSaheli। महिलाओं की वित्तीय सुरक्षा और स्वतंत्रता हमारा लक्ष्य।',
    'footer.certified': 'प्रमाणित प्लेटफॉर्म',
    'footer.womenEmpowerment': 'महिला सशक्तिकरण के लिए समर्पित'
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',
    'nav.resources': 'Resources',
    'nav.brandName': 'FinSaheli',
    'nav.subtitle': 'Women Financial Support',
    'nav.exitNow': 'Exit Now',
    'nav.start': 'Get Started',
    
    // Hero
    'hero.certified': 'Certified Service by FinSaheli',
    'hero.title': 'Women Financial Empowerment',
    'hero.titleHighlight': 'Center',
    'hero.description': 'Special financial counseling service for women by FinSaheli. We are with you during divorce, job loss, or any financial crisis.',
    'hero.startConsultation': 'Start Consultation',
    'hero.moreInfo': 'Learn More',
    'hero.confidential': '100% Confidential',
    'hero.secure': 'Secure Platform',
    
    // Footer
    'footer.brandName': 'FinSaheli',
    'footer.subtitle': 'Women Financial Support Center',
    'footer.description': 'Special financial counseling and support service for women.',
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
    'footer.financeHelpline': '1800-XXX-XXXX - FinSaheli Helpline',
    'footer.exitSite': 'Exit Site Immediately',
    'footer.copyright': '© 2024 FinSaheli. Women\'s financial security and independence is our goal.',
    'footer.certified': 'Certified Platform',
    'footer.womenEmpowerment': 'Dedicated to Women Empowerment'
  },
  mr: {
    // Navigation
    'nav.features': 'वैशिष्ट्ये',
    'nav.privacy': 'गोपनीयता',
    'nav.support': 'सहाय्य',
    'nav.resources': 'संसाधने',
    'nav.brandName': 'FinSaheli',
    'nav.subtitle': 'महिला आर्थिक सहाय्य',
    'nav.exitNow': 'ताबडतोब बाहेर पडा',
    'nav.start': 'सुरुवात करा',
    
    // Hero
    'hero.certified': 'FinSaheli ने प्रमाणित सेवा',
    'hero.title': 'महिला आर्थिक सशक्तीकरण',
    'hero.titleHighlight': 'केंद्र',
    'hero.description': 'FinSaheli कडून महिलांसाठी विशेष आर्थिक सल्ला सेवा. घटस्फोट, नोकरी गमावणे किंवा कोणत्याही आर्थिक संकटात आम्ही तुमच्यासोबत आहोत.',
    'hero.startConsultation': 'सल्ला सुरू करा',
    'hero.moreInfo': 'अधिक माहिती',
    'hero.confidential': '१००% गुप्त',
    'hero.secure': 'सुरक्षित प्लॅटफॉर्म',
    
    // Footer
    'footer.brandName': 'FinSaheli',
    'footer.subtitle': 'महिला आर्थिक सहाय्य केंद्र',
    'footer.description': 'महिलांसाठी विशेष आर्थिक सल्ला आणि सहाय्य सेवा.',
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
    'footer.financeHelpline': '१८००-XXX-XXXX - FinSaheli हेल्पलाइन',
    'footer.exitSite': 'ताबडतोब साइटवरून बाहेर पडा',
    'footer.copyright': '© २०२४ FinSaheli. महिलांची आर्थिक सुरक्षा आणि स्वातंत्र्य हे आमचे ध्येय.',
    'footer.certified': 'प्रमाणित प्लॅटफॉर्म',
    'footer.womenEmpowerment': 'महिला सशक्तिकरणासाठी समर्पित'
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
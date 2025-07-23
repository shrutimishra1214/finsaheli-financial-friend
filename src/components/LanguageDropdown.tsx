import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]); // Hindi as default

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    // Here you would typically implement the actual language switching logic
    console.log('Switching to language:', language.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-background/80 backdrop-blur-sm border-border/50">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{selectedLanguage.nativeName}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`cursor-pointer ${
              selectedLanguage.code === language.code 
                ? 'bg-pink/10 text-pink font-medium' 
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
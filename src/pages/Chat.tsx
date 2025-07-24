import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'saheli';
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm your FinSaheli, here to help you navigate your financial journey with complete privacy and care. How are you feeling today, and what would you like to explore?",
      sender: 'saheli',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand this might be a difficult time for you. Let's take this step by step. Can you tell me a bit about your current situation? Remember, everything we discuss here is completely private.",
        "That sounds challenging, but you're taking a brave step by reaching out. Let's focus on what we can control. Would you like to start by looking at your current financial resources?",
        "I'm here to support you through this. Financial planning during transitions can feel overwhelming, but we'll break it down into manageable steps. What feels most urgent to you right now?",
        "Your safety and privacy are my top priorities. Whatever you're comfortable sharing, we can work with. Would you like to explore emergency financial planning or long-term independence strategies?",
        "I can sense you might be feeling uncertain, and that's completely normal. Many women have walked this path before you. Shall we start with understanding what assets and resources you currently have access to?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const saheliMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'saheli',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, saheliMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border p-4">
        <div className="container mx-auto">
          {/* Back Button */}
          <div className="absolute">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          {/* Centered Logo and Title */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden mb-2">
              <img 
                src="/lovable-uploads/a0110b81-b651-4e14-ba11-7ef2ffa2e339.png" 
                alt="FinSaheli Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-foreground text-lg">Your FinSaheli</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 relative">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 opacity-5">
            <img 
              src="/lovable-uploads/a0110b81-b651-4e14-ba11-7ef2ffa2e339.png" 
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="container mx-auto max-w-4xl space-y-4 relative z-10">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <Card className={`max-w-xs sm:max-w-md lg:max-w-lg border-0 shadow-soft ${
                message.sender === 'user' 
                  ? 'bg-gradient-hero text-white' 
                  : 'bg-card'
              }`}>
                <CardContent className="p-4">
                  <p className={`text-sm leading-relaxed ${
                    message.sender === 'user' ? 'text-white' : 'text-foreground'
                  }`}>
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-xs text-muted-foreground ml-2">FinSaheli is typing...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-card/80 backdrop-blur-sm border-t border-border p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your mind... Everything here is private and safe."
              className="flex-1 border-border focus:ring-sage"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              variant="hero"
              size="sm"
              className="px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Your conversations are private and not stored permanently. Press Ctrl+Enter for new line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
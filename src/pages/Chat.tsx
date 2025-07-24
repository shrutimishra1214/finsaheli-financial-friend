import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft, Mic, Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'saheli';
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();

  // ✅ Generate and store sessionId in sessionStorage
  const [sessionId] = useState(() => {
    const existing = sessionStorage.getItem("sessionId");
    if (existing) return existing;
    const newId = crypto.randomUUID();
    sessionStorage.setItem("sessionId", newId);
    return newId;
  });

  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Namaste! I'm your FinSaheli, here to help you navigate your financial journey with complete privacy and care. How are you feeling today, and what would you like to explore?",
    sender: 'saheli',
    timestamp: new Date()
  }]);

  const [inputText, setInputText] = useState("");
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    setInputText(transcript);
  }, [transcript]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) setAvailableVoices(voices);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async (newMessageText: string): Promise<string> => {
      const response = await fetch("http://172.20.10.9:8080/api/chat/response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: newMessageText, sessionId }), // ✅ Include sessionId
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data.audio);
      return data.reply;
    },
    onSuccess: (responseText) => {
      const saheliMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'saheli',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, saheliMessage]);
    },
    onError: () => {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'saheli',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSpeak = (text: string, messageId: string) => {
    if (speakingMessageId === messageId) {
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    // ✅ Use female / Indian voice if available
    const preferredVoice = availableVoices.find(
      (v) =>
        v.name.toLowerCase().includes("female") ||
        v.name.includes("Google UK English Female") ||
        v.lang === "en-IN"
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setSpeakingMessageId(messageId);
    utterance.onend = () => setSpeakingMessageId(null);
    utterance.onerror = () => {
      console.error("Speech synthesis error");
      setSpeakingMessageId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    sendMessage(inputText);
    setInputText("");
    resetTranscript();
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
        <div className="container mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-black text-sm font-bold">FS</span>
            </div>
            <div>
              <h1 className="font-semibold text-foreground">Your FinSaheli</h1>
              <p className="text-xs text-muted-foreground">Private & Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 relative">
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender === 'saheli' && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-muted-foreground hover:text-foreground"
                  onClick={() => handleSpeak(message.text, message.id)}
                >
                  {speakingMessageId === message.id ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              )}
              <Card className={`max-w-xs sm:max-w-md lg:max-w-lg border-0 shadow-soft ${message.sender === 'user' ? 'bg-gradient-hero text-black' : 'bg-card'}`}>
                <CardContent className="p-4">
                  <p className={`text-sm leading-relaxed ${message.sender === 'user' ? 'text-black' : 'text-foreground'}`}>
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-black/70' : 'text-muted-foreground'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}

          {isPending && (
            <div className="flex justify-start">
              <Card className="border-0 shadow-soft bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-sage rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <span className="text-xs text-muted-foreground ml-2">FinSaheli is typing...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="bg-card/80 backdrop-blur-sm border-t border-border p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-2">
            {browserSupportsSpeechRecognition && (
              <Button
                onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening()}
                variant="ghost"
                size="sm"
                className={`px-3 ${listening ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground'}`}
                disabled={isPending}
              >
                <Mic className="w-5 h-5" />
              </Button>
            )}
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={listening ? "Listening..." : "Type your message or use the mic"}
              className="flex-1 border-border focus:ring-sage disabled:opacity-50"
              disabled={isPending}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isPending}
              variant="hero"
              size="sm"
              className="px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Your conversations are private and not stored permanently. Press Ctrl+Enter for a new line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;

"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, User, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string | null;
  options?: string[];
  waitingFor?: "text" | "option";
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hi there! 👋 How can we help you today?",
    options: ["Roof Repair", "Roof Replacement", "Other"],
    waitingFor: "option",
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = { id: Date.now(), sender: "user", text: option };
    setMessages((prev) => [...prev, userMessage]);

    // Add bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: `Great! For ${option}, could you please provide your ZIP code?`,
        waitingFor: "text",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const userMessage: Message = { id: Date.now(), sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simple bot logic
     setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: `Thanks! An expert will review your request and contact you shortly. What's the best phone number to reach you?`,
        waitingFor: "text",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };
  
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-2 w-[calc(100vw-2rem)] max-w-sm"
            >
              <Card className="h-[60vh] flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        <Bot />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Mend Roofing Assistant</h3>
                      <p className="text-xs text-primary-foreground/80">Online</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={cn("flex items-end gap-2", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                      {message.sender === 'bot' && <Avatar className="h-6 w-6"><AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback></Avatar>}
                      {message.text && (
                        <div className={cn("max-w-[75%] rounded-lg px-3 py-2 text-sm", 
                          message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground')}>
                          {message.text}
                        </div>
                      )}
                      {message.sender === 'user' && <Avatar className="h-6 w-6"><AvatarFallback><User className="h-4 w-4"/></AvatarFallback></Avatar>}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </CardContent>
                <CardFooter className="p-2 border-t">
                  {lastMessage.waitingFor === "option" && lastMessage.options ? (
                     <div className="p-2 w-full grid grid-cols-1 gap-2">
                       {lastMessage.options.map(option => (
                           <Button key={option} variant="outline" onClick={() => handleOptionClick(option)}>{option}</Button>
                       ))}
                     </div>
                  ) : (
                    <div className="flex w-full items-center gap-2">
                      <Input 
                        placeholder="Type your message..." 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button size="icon" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg bg-accent hover:bg-accent/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Zap className="h-8 w-8" />}
        </Button>
      </div>
    </>
  );
}

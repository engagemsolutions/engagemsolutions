'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, User, Phone, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  options?: string[];
  showLeadForm?: boolean;
}

interface AIConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIConsultantModal({ isOpen, onClose }: AIConsultantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: siteConfig.aiConsultantKnowledge.welcomeMessage,
      options: siteConfig.aiConsultantKnowledge.suggestedPrompts,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', requirement: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (userText: string) => {
    if (!userText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: messages }),
      });

      const data = await response.json();
      
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || "I'd be glad to assist you with that! Would you like to share your project scope or schedule a consultation with our Dubai team?",
        options: data.suggestions || [
          "Book a Strategy Call",
          "What are the typical project timelines?",
          "Can you share client case studies?"
        ],
        showLeadForm: data.triggerLeadForm || userText.toLowerCase().includes('book') || userText.toLowerCase().includes('quote') || userText.toLowerCase().includes('contact'),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      // Fallback response
      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Engage Marketing Solutions specializes in 3 core pillars: AI Customer Care & Sales Agents, High-ROAS Digital Marketing, and Scalable E-commerce Solutions, alongside our physical printing facility in Ajman and media hubs in Dubai & Sharjah. Would you like to connect directly with our strategic consultants?",
        options: ["Book a consultation", "WhatsApp our Dubai team (+971 50 271 8601)"],
        showLeadForm: true,
      };
      setMessages((prev) => [...prev, aiReply]);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.email && !leadData.phone) return;

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadData.name || 'AI Consultant Visitor',
          email: leadData.email,
          phone: leadData.phone,
          message: `Captured via AI Consultant: ${leadData.requirement || 'General inquiry'}`,
          source: 'AI Business Consultant',
        }),
      });
      setLeadSubmitted(true);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'ai',
          text: `Thank you, ${leadData.name || 'there'}! Your request has been forwarded to our Dubai team. A senior consultant will review your requirements and reach out promptly. You can also message us directly on WhatsApp at +971 50 271 8601.`,
        },
      ]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl h-[620px] max-h-[90vh] glass-card rounded-3xl border border-brand-500/30 flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#262626]/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
                  <Sparkles size={20} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    EngageM AI Consultant
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Live
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Grounded in verified agency capabilities & Dubai operations
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0 mt-1">
                      <Bot size={16} />
                    </div>
                  )}

                  <div className={`max-w-[85%] flex flex-col gap-2`}>
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-brand-500 text-dark-surface font-medium rounded-tr-sm ml-auto'
                          : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-sm'
                      }`}
                    >
                      {m.text}
                    </div>

                    {/* Interactive Prompt Chips */}
                    {m.options && m.options.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleSend(opt)}
                            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-brand-500/20 hover:text-brand-300 border border-slate-700/80 text-slate-300 transition-all text-left"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* In-Chat Lead Capture Form */}
                    {m.showLeadForm && !leadSubmitted && (
                      <div className="mt-2 p-4 rounded-2xl bg-[#30302E] border border-brand-500/30 shadow-lg">
                        <h4 className="text-xs uppercase font-bold text-brand-400 tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircle2 size={14} /> Connect With Our Strategy Team
                        </h4>
                        <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                          <input
                            type="text"
                            placeholder="Your Name / Company"
                            value={leadData.name}
                            onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                            className="w-full text-xs px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                            required
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input
                              type="email"
                              placeholder="Business Email *"
                              value={leadData.email}
                              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                              className="text-xs px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                              required
                            />
                            <input
                              type="tel"
                              placeholder="Phone / WhatsApp *"
                              value={leadData.phone}
                              onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                              className="text-xs px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full py-2 bg-brand-400 hover:bg-brand-300 text-dark-surface font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-glow-cyan"
                          >
                            Request Consultation Call
                          </button>
                        </form>
                      </div>
                    )}
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                    <Bot size={16} />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-xs flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-brand-400" />
                    EngageM AI is formulating response...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3.5 sm:p-4 border-t border-slate-800 bg-[#262626]/95">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about EngageM services, pricing, or locations..."
                  className="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="p-3 rounded-2xl bg-brand-400 hover:bg-brand-300 disabled:opacity-40 disabled:cursor-not-allowed text-dark-surface font-bold transition-all shadow-glow-cyan"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

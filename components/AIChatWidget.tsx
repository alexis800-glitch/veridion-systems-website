'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

const CHAT_URL = 'https://superagent-60478300.base44.app/functions/veridionChat';

interface Message {
  id: number;
  role: 'bot' | 'user' | 'typing';
  text: string;
}

let msgId = 0;

export function AIChatWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: msgId++, role: 'bot', text: "Hi! I'm Veridion AI. Ask me anything about our services, process, or how we can help your business." },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setOpen((prev) => {
      if (!prev) setTimeout(() => inputRef.current?.focus(), 100);
      return !prev;
    });
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || sending) return;

    setMessages((m) => [...m, { id: msgId++, role: 'user', text: question }]);
    setInput('');
    setSending(true);
    const typingId = msgId++;
    setMessages((m) => [...m, { id: typingId, role: 'typing', text: 'Thinking…' }]);

    try {
      const res = await fetch(CHAT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const answer = data?.reply?.reply || data?.reply || "Sorry, I couldn't get a response. Please try again.";
      setMessages((m) => [...m.filter((x) => x.id !== typingId), { id: msgId++, role: 'bot', text: answer }]);
    } catch {
      setMessages((m) => [
        ...m.filter((x) => x.id !== typingId),
        { id: msgId++, role: 'bot', text: 'Sorry, something went wrong. Please try again or contact us directly.' },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`ai-chat-panel${open ? ' open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Ask Veridion AI"
      >
        <div className="ai-chat-header">
          <div className="ai-chat-title">
            <span className="ai-chat-dot" />
            Veridion AI
          </div>
          <button className="ai-chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="ai-chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`ai-msg ai-msg--${msg.role}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="ai-chat-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            ref={inputRef}
            type="text"
            className="ai-chat-input"
            placeholder="Ask a question…"
            maxLength={500}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
          />
          <button type="submit" className="ai-chat-send" aria-label="Send message" disabled={sending}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" stroke="none"/>
            </svg>
          </button>
        </form>
      </div>

      {/* Floating button */}
      <button
        className={`float-btn${visible ? ' visible' : ''}`}
        aria-label="Ask Veridion AI"
        aria-expanded={open}
        onClick={toggleChat}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="0.5" fill="currentColor"/>
          <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
          <circle cx="15" cy="10" r="0.5" fill="currentColor"/>
        </svg>
        <span>Ask Veridion AI</span>
      </button>
    </>
  );
}

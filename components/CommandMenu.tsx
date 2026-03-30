"use client";
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FileText, MessageSquare, MonitorSmartphone, Link2, Github, Linkedin, Twitter, Shield, FileCheck, Search, Moon, Sun } from "lucide-react";

export function CommandMenu({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none p-4 w-full h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl overflow-hidden pointer-events-auto shadow-2xl rounded-2xl"
              style={{
                background: "rgba(18, 18, 18, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Command
                className="w-full flex w-full flex-col font-sans"
                shouldFilter={true}
                loop
                label="Command Menu"
              >
                <style jsx global>{`
                  [cmdk-input] {
                    width: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                    padding: 20px 20px 20px 48px;
                    color: white;
                    font-size: 16px;
                  }
                  [cmdk-input]::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                  }
                  [cmdk-list] {
                    max-height: 400px;
                    overflow: auto;
                    padding: 8px 12px 12px;
                  }
                  [cmdk-list]::-webkit-scrollbar {
                    width: 6px;
                  }
                  [cmdk-list]::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                  }
                  [cmdk-group-heading] {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 8px 16px 4px;
                    font-weight: 600;
                  }
                  [cmdk-item] {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    color: rgba(255, 255, 255, 0.85);
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all 0.1s ease;
                  }
                  [cmdk-item][data-selected="true"] {
                    background: rgba(255, 255, 255, 0.08);
                    color: white;
                  }
                  [cmdk-item][data-selected="true"] .cmdk-return-icon {
                    display: block;
                  }
                `}</style>
                <div className="flex items-center border-b border-white/[0.08] relative">
                  <Search className="absolute left-4 w-5 h-5 text-white/40" />
                  <Command.Input placeholder="Type a command or search..." autoFocus />
                  
                  <div className="absolute right-4 flex items-center gap-2">
                    <button className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 transition-colors">
                      <Moon size={12} />
                    </button>
                    <div className="px-1.5 py-0.5 rounded flex items-center justify-center bg-white/5 border border-white/10 text-[10px] text-white/50 tracking-widest uppercase">
                      esc
                    </div>
                  </div>
                </div>

                <Command.List>
                  <Command.Empty className="py-6 text-center text-white/50 text-sm">No results found.</Command.Empty>

                  <Command.Group heading="Pages">
                    <CommandItem icon={<Home size={15}/>} title="Home" subtitle="Go to homepage" />
                    <CommandItem icon={<User size={15}/>} title="About" subtitle="Learn more about me" />
                    <CommandItem icon={<Briefcase size={15}/>} title="Projects" subtitle="View my work" />
                    <CommandItem icon={<FileText size={15}/>} title="Blog" subtitle="Read my thoughts" />
                    <CommandItem icon={<MessageSquare size={15}/>} title="Guestbook" subtitle="Leave a message" />
                    <CommandItem icon={<MonitorSmartphone size={15}/>} title="Uses" subtitle="My tech stack" />
                    <CommandItem icon={<Link2 size={15}/>} title="Links" subtitle="All my links" />
                  </Command.Group>

                  <Command.Group heading="Startups">
                    <CommandItem icon={<span className="text-blue-400 font-bold text-xs">AF</span>} title="ProjectOne" subtitle="Amazing AI tool for devs" />
                    <CommandItem icon={<span className="text-blue-400 font-bold text-xs">AF</span>} title="ProjectTwo" subtitle="SaaS platform" />
                  </Command.Group>

                  <Command.Group heading="Connect">
                    <CommandItem icon={<Github size={15}/>} title="GitHub" subtitle="@mohammedfavaz" />
                    <CommandItem icon={<Linkedin size={15}/>} title="LinkedIn" subtitle="Professional network" />
                    <CommandItem icon={<Twitter size={15}/>} title="X (Twitter)" subtitle="@favaz_dev" />
                  </Command.Group>

                  <Command.Group heading="Legal">
                    <CommandItem icon={<Shield size={15}/>} title="Privacy Policy" subtitle="Data handling" />
                    <CommandItem icon={<FileCheck size={15}/>} title="Terms of Service" subtitle="Usage rules" />
                  </Command.Group>
                </Command.List>

                <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-white/[0.02]">
                  <div className="flex gap-4 text-[11px] text-white/40">
                    <span className="hover:text-white/80 cursor-pointer transition-colors">Privacy</span>
                    <span className="hover:text-white/80 cursor-pointer transition-colors">Terms</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-white/40">
                    <div className="flex items-center gap-1.5"><span className="opacity-70">↑ ↓</span> Navigate</div>
                    <div className="flex items-center gap-1.5"><span className="opacity-70">↵</span> Open</div>
                  </div>
                </div>
              </Command>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}

function CommandItem({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <Command.Item value={`${title} ${subtitle}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="text-white/50">{icon}</div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white/90">{title}</span>
            <span className="text-[11px] text-white/40">{subtitle}</span>
          </div>
        </div>
        <div className="text-white/20 cmdk-return-icon hidden">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 10 4 15 9 20"></polyline>
            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
          </svg>
        </div>
      </div>
    </Command.Item>
  );
}

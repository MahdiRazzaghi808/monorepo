'use client';
import { useState, useEffect, useRef } from 'react';
import { Globe, ShoppingCart, Book, Settings, Box } from 'lucide-react';
import { Button } from '@repo/main/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
const apps = [
  // TODO: READ domain from env
  { name: 'سایت اصلی', icon: Globe, domain: 'http://localhost:3000' },
  { name: 'سامانه فروش', icon: ShoppingCart, domain: 'http://localhost:3002' },
  { name: 'سامانه آموزش', icon: Book, domain: 'http://localhost:3001' },
  { name: 'سامانه مدیریت', icon: Settings, domain: 'https://admin.example.com' },
];

export function MultiAppSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchApp = (domain: string) => {
    window.location.href = domain;
  };

  return (
    <div ref={ref} className="fixed bottom-4 left-4 z-50 flex flex-col items-start">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-2 flex flex-col items-start gap-2"
          >
            {apps.map((app) => {
              const Icon = app.icon;
              return (
                <Button
                  key={app.name}
                  variant="outline"
                  className="flex items-center justify-center w-12 h-12 rounded-full p-2 border-border text-foreground bg-card hover:bg-primary hover:text-primary-foreground shadow transition-all"
                  onClick={() => switchApp(app.domain)}
                >
                  <Icon className="w-6 h-6" />
                </Button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="ghost"
        className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Box className="w-6 h-6" />
      </Button>
    </div>
  );
}

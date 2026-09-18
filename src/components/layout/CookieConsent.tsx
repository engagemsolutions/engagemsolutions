'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('engagem_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('engagem_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('engagem_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.35 }}
          aria-label="Cookie Consent Banner"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#262626]/95 backdrop-blur-md border-t border-slate-700/80 px-4 py-3 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
            <p className="text-center sm:text-left">
              This website uses cookies to provide necessary site functionality and to improve your experience. By using this website, you agree to our use of cookies.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-slate-100 hover:bg-white text-slate-900 font-semibold rounded text-xs transition-colors shadow-sm"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-1.5 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-medium rounded text-xs transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

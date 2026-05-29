import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dict } from './dictionary.js';

const I18nContext = createContext(null);
const STORAGE_KEY = 'malik-lang';

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') {
        setLang(stored);
        document.documentElement.lang = stored;
      } else {
        document.documentElement.lang = 'en';
      }
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setLang((curr) => {
      const next = curr === 'en' ? 'es' : 'en';
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const setLanguage = useCallback((next) => {
    if (next !== 'en' && next !== 'es') return;
    setLang(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (path) => {
      const parts = path.split('.');
      let node = dict[lang];
      for (const p of parts) {
        if (node && typeof node === 'object' && p in node) node = node[p];
        else return path;
      }
      return node;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, t, toggle, setLanguage }), [lang, t, toggle, setLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}

export function tField(obj, lang) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  if (Array.isArray(obj)) return obj.map((item) => tField(item, lang));
  return obj[lang] ?? obj.en ?? '';
}

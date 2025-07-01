import { createContext, useContext, useState,  } from 'react';
import type { ReactNode } from 'react';

export const themes = {
  colorful: {
    background: 'linear-gradient(135deg,rgb(236, 240, 255) 0%, rgb(120, 48, 197) 100%)',
    textColor: '#333',
  },
  light: {
    background: '#fff',
    textColor: '#333',
  },
  dark: {
    background: '#333',
    textColor: '#fff',
  },
};

type ThemeType = 'colorful' | 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
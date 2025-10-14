'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'original' | 'doula'>('original');

  useEffect(() => {
    // Загружаем сохраненную тему из localStorage при инициализации
    const savedTheme = localStorage.getItem('theme') as 'original' | 'doula' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      // Применяем тему сразу при загрузке
      if (savedTheme === 'doula') {
        document.body.classList.add('doula-theme');
        document.body.classList.remove('original-theme');
      } else {
        document.body.classList.add('original-theme');
        document.body.classList.remove('doula-theme');
      }
    } else {
      // Если тема не сохранена, устанавливаем по умолчанию
      document.body.classList.add('original-theme');
      document.body.classList.remove('doula-theme');
    }
  }, []);

  useEffect(() => {
    // Применяем тему к body при изменении
    if (theme === 'doula') {
      document.body.classList.add('doula-theme');
      document.body.classList.remove('original-theme');
    } else {
      document.body.classList.add('original-theme');
      document.body.classList.remove('doula-theme');
    }
    
    // Сохраняем в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'original' ? 'doula' : 'original');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
      title={`Switch to ${theme === 'original' ? 'Doula' : 'Original'} theme`}
    >
      <div className="flex items-center space-x-1">
        <div className={`w-3 h-3 rounded-full ${theme === 'original' ? 'bg-primary-500' : 'bg-doula-pastel-teal'}`}></div>
        <div className={`w-3 h-3 rounded-full ${theme === 'original' ? 'bg-secondary-500' : 'bg-doula-terracotta'}`}></div>
      </div>
      <span className="text-sm font-medium text-neutral-700">
        {theme === 'original' ? 'Original' : 'Doula'}
      </span>
    </button>
  );
};

export default ThemeToggle;

import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Изначально проверим, сохранена ли тема в localStorage
  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');

  // Эффект для применения темы
  useEffect(() => {
    // Если текущий режим - темный, применяем соответствующий класс
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Обработчик смены темы
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleTheme}>
      Переключить на {isDarkMode ? 'светлую' : 'темную'} тему
    </button>
  );
};

export default ThemeToggle;

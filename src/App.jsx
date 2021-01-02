import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero/Hero';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { useDarkTheme } from './hooks/useDarkMode';

function App() {
  const [theme, setTheme] = useDarkTheme(
    // eslint-disable-next-line no-mixed-operators
    typeof window !== 'undefined' && window.localStorage.getItem('theme') || 'light',
  );

  const themeToggler = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Hero theme={theme} toggleTheme={themeToggler} />
      </>
    </ThemeProvider>
  );
}

export default App;

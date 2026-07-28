import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Lab } from './components/Lab/Lab';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
        t={t}
      />
      <Hero t={t} />
      <Projects language={language} t={t} />
      <Lab t={t} />
      <About t={t} />
      <Contact t={t} />
    </>
  );
}

export default App;
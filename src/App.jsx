import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import Certificate from "./pages/certificate/Certificate";
import DiplomaInstitute from "./pages/diploma/DiplomaInstitute";
import ViewProjets from "./pages/project/ViewProject";



function App() {
  const { t, i18n } = useTranslation("global");
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="App">
      <header className={`App_header ${scrolled ? 'Header_scrolled' : ''}`}>
        <Header t={t}/>
      </header>
      <main className="App_main">
        <Routes>
          <Route path="/" element={<Home t={t}/>} />
          <Route path="/pro" element={<ViewProjets t={t}/>} />
          <Route path='/diplomados' element={<Certificate t={t}/>}/>
          <Route path='/education-diplomas/:instituto' element={<DiplomaInstitute t={t}/>}/>
        </Routes>
      </main>
      <footer className="App_footer">
        <Footer t={t}/>
      </footer>
    </div>
  );
}

export default App;

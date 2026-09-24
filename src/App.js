import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;

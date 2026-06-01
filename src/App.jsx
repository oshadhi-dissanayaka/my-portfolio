import Header from "./components/Header";
import Footer from "./components/Footer";
import Overview from "./sections/Overview";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      <Header />
      <Overview />
      <About />
      <Skills />
      <Projects />
      <Contact />
      

     

      <Footer />
    </div>
  );
}

export default App;

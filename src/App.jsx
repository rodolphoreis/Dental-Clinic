import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Sobre from "./Components/Sobre";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="section1">
          <Banner />
        </section>

        <section id="nossos-servicos">
          <Services />
        </section>

        <section id="section3">
          <Section3 />
        </section>

        <section id="odontologia-geral">
          <Section4 />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
      </main>

      <footer id="contatos">
        <Footer />
      </footer>
    </>
  );
}

export default App;

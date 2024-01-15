import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Section3 from "./Components/Section3";
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

        <section id="section2">
          <Services />
        </section>

        <section id="section3">
          <Section3 />
        </section>

        <section id="section4"></section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;

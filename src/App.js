import About from "./sections/About";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;

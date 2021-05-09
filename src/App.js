import GlobalStyle from "./components/GlobalStyle";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { sliderData } from "./data/SliderDate";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar/>
      <Hero slides={sliderData}/>
    </>
  );
}

export default App;

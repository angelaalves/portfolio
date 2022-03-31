import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import WorkXp from "./pages/WorkXp";
import Contacts from "./pages/Contacts";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" id="home">
      <Header />
      <div className="Content">
        <Home />
        <AboutMe />
        <WorkXp />
        <Contacts />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

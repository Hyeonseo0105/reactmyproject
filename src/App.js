import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

function App() {
  return (
      <Router>
      <Header/>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
        </Routes>
      <Footer/>
      </Router>
  );
}

export default App;

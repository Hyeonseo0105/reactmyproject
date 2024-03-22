import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import TravelList from "./components/travel/TravelList";
import TravelDetail from "./components/travel/TravelDetail";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import TravelFind from "./components/travel/TravelFind";
import FoodFind from "./components/food/FoodFind";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";

function App() {
  return (
      <Router>
      <Header/>
        <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/travel/list"} element={<TravelList/>}/>
            <Route path={"/travel/detail/:no"} element={<TravelDetail/>}/>
            <Route path={"/food/list"} element={<FoodList/>}/>
            <Route path={"/food/detail/:no"} element={<FoodDetail/>}/>
            <Route path={"/travel/find"} element={<TravelFind/>}/>
            <Route path={"/food/find"} element={<FoodFind/>}/>
            <Route path={"/board/list"} element={<BoardList/>}/>
            <Route path={"/board/insert"} element={<BoardInsert/>}/>
            <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
            <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
            <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
        </Routes>
      <Footer/>
      </Router>
  );
}

export default App;

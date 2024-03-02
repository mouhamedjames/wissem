
import './App.css';
import{ BrowserRouter ,Route,Routes} from "react-router-dom"
import Header from "./components/header/Header.js"
import Home  from "./pages/home/home.js"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes> 
    <Route path="/"  element={<Home/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;

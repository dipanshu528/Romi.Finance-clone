import { HashRouter , Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Nft from "./components/Nft";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Dashboard from "./components/Dashboard";
import Earn from "./components/Earn";
import Ecosystem from "./components/Ecosystem";
import Refferrals from "./components/Refferrals";



function App() {


  return (
    <>
    <HashRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            
            <Route path="/earn" element={<Earn/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/buy" element={<Buy />}></Route>
            <Route path="/ecosystem" element={<Ecosystem />}></Route>
            <Route path="/nft" element={<Nft />}></Route>
            <Route path="/refferrals" element={<Refferrals />}></Route>
          </Routes>


          
        </HashRouter>
      
    </>
  );
}

export default App;

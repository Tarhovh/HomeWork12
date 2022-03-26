import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home2 from "./Apps/Tests/pages/Home2";
import Home from "./Home";

function App() {
  return (


    
 
    <div className="App">
    <h1>My Apps</h1>
      <Routes>
        
        <Route path="/" element={<Home/>} />
       
      </Routes>
      </div>


  );
}

export default App;

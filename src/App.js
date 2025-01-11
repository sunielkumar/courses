import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/courses" element={<Courses/>} />
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;

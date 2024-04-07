import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Car";
import Footer from "./components/Footer";
import CarDetail from "./pages/CarDetail";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
    <div className="container">
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/carDetail/:id' element={<CarDetail/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  )
}
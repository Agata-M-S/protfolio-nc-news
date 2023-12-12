import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Articles } from "./pages/Articles";

function App() {
	return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/articles" element={<Articles />} />
    </Routes>
    </>
  )
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Articles } from "./pages/Articles";
import { SingleArticle } from "./pages/SingleArticle";

function App() {
	return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:article_id" element= {<SingleArticle/>} />
    </Routes>
    </>
  )
}

export default App;

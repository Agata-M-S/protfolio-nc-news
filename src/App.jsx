import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Articles } from "./pages/Articles";
import { SingleArticle } from "./pages/SingleArticle";
import { UserProvider } from "./contexts/userContext";
import { UsersBar } from "./components/UsersBar";
import { Topics } from "./pages/Topics";
import { Error } from "./components/Error";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<div className="top">
				<Header />
				<NavBar />
			</div>
			<Footer />
			<UserProvider>
				<UsersBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/articles/:article_id" element={<SingleArticle />} />
					<Route path="/topics" element={<Topics />} />
					<Route path="/*" element={<Error message="page not found" />} />
				</Routes>
			</UserProvider>
		</>
	);
}

export default App;

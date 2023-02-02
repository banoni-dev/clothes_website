import "./App.css";
import Header from "./components/header/header.jsx";
import Cathegories from "./components/cathegories/Cathegories";
import { Outlet, Routes, Route } from "react-router-dom";
import Content from './components/content/content';
import Footer from './components/footer/footer';
const Home = () => {
  return <div className="home">
  <Header/>
  <Outlet />
  <Footer />
  </div>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Content />}></Route>
        <Route path="cathegories" element={<Cathegories />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

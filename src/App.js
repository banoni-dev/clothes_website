import "./App.css";
import Header from "./components/header/header.jsx";
import Cathegories from "./components/cathegories/Cathegories";
import { Outlet, Routes, Route } from "react-router-dom";
import Content from './components/content/content';
import Footer from './components/footer/footer';
import SignIn from "./components/sign-in/SignIn";
import SignUp from './components/sign-up/SignUp';
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
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import "./App.css";
import "./styles/About.css";

function App() {
  return (
    <div className="neon-border">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="profile/:id" element={<Profile />} />
          <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/admin">For Admin!!</NavLink>
      </nav>
    </BrowserRouter>
    </div>
  );
}

export default App;

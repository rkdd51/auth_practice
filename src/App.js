import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Profile from "./Navbar/Profile";
import Login from "./Navbar/Login";
import { AuthProvider } from "./auth";
import { useAuth } from "./auth";

export default function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <h1>Authantication from React Router </h1>
      <AuthProvider>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
            {!auth && <Link to="/login">Login</Link>}
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

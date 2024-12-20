import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Contact from "./pages/Contact";
import ToolPage from "./pages/ToolPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<ToolPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

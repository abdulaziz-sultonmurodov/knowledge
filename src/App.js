
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage'
import StaffPage from "./pages/StaffPage";

const App = () => {
  return (
    <Router>
         <Navbar /> 
      {/* <Route path="/" component={HomePage} exact />
      <Route path="/" component={AboutPage} exact />
      <Route path="/" component={StaffPage} exact /> */}
      <HomePage />
      <AboutPage />
      <StaffPage />
         <Footer />
    </Router>
  );
};

export default App;

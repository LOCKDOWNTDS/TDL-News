import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/MyNavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Category from "./pages/CategoryResult";
import Search from "./pages/SearchResult";
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

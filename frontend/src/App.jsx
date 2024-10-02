import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import {AboutUs} from './components/AboutUs';
import {LatestPost} from './components/LatestPost';
import {Login} from './components/Login';
import {Posts} from './components/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

const Layout = () => {
  const location = useLocation();
  
  // Define routes where you DON'T want the navbar to appear
  const noNavbarRoutes = [ '/Posts'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/update" element={<LatestPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </>
  );
};

export default App;

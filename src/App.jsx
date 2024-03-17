import { Link, Route, Routes } from "react-router-dom";
import Show from "./components/Show";
import Services from './components/Services'; // Make sure to import Services component
import Home from './components/Home';

const App = () => {
  return (
    <div className='pt-[5%] pl-[5%]'>
      <nav className="flex justify-center gap-10">
        <Link to="/home">Home</Link>  {/* Change "link" to "Link" and use lowercase for the path */}
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;


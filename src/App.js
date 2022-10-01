import './App.css';
// import {Navbar} from './Components/Navbar';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Service from './Components/Service';
import Work from './Components/Work';

function App() {
  return (
    <div>
    
      <Navbar />
      <Header />
      <Service />
      <Work />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

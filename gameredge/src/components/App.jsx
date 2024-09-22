import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Destacados from './Destacados';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Carousel />
        <Destacados />
        <Footer />
    </div>
  );
};

export default App;

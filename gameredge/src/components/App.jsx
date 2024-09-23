import '../assets/style.css';
import Header  from './Header';
import Carousel from './Carousel';
import Destacados from './destacados';
import Footer from './Footer';

function  App() {
  return (

    <div className="App">
        <Navbar />
        <Carousel />
        <Destacados />
        <Footer />
    </div>
  );
}

export default App;

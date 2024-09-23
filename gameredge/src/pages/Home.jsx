import '../assets/style.css';
import Carousel from '../components/Carousel';
import Destacados from '../components/Destacados';
import Footer from '../components/Footer';

const Home = () => {
  return (
   <div>
    <Carousel />
    <Destacados />
    <Footer />
   </div>
  );
}

export default Home;

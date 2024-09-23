import '../assets/style.css';
import Carousel from '../components/Carousel';
import Destacados from '../components/Destacados';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Public from '../Routes/Public'


const Home = () => {
  return (
   <>
    
    <NavBar/>
    <Public />
    <Carousel />
    <Destacados />
    <Footer />

   </>
  );
}
  
  export default Home;
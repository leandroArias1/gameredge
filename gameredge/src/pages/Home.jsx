import '../assets/style.css';
import Carousel from '../components/Carousel';
import Destacados from '../components/Destacados';
import Footer from '../components/Footer';
<<<<<<< HEAD

const Home = () => {
  return (
   <div>
    <Carousel />
    <Destacados />
    <Footer />
   </div>
=======
import Header from '../components/Header';
import Public from '../Routes/Public'
import App from '../components/App'


const Home = () => {
  return (
    <>
    <App/>
    <Header/>
    <Public />
    <Carousel />
    <Destacados />
    <Footer />

    </>
>>>>>>> af249d2df4a810aebaa0122f5001bb31d7c50847
  );
}

export default Home;

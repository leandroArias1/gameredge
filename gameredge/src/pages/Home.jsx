import '../assets/style.css';
import Carousel from '../components/Carousel';
import Destacados from '../components/Destacados';
import Footer from '../components/Footer';
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
  );
}
  
  export default Home;
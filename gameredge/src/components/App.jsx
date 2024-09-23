import '../assets/style.css';
import Header  from './Header';
import Carousel from './Carousel';
import Destacados from './Destacados';
import Footer from './Footer';




const  App = () => {
  
  return (

    <div className="App">

        <Header />
        <Carousel />
        <Destacados />
        <Footer />
    </div>
  );
}

export default App;

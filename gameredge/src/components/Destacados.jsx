import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

const Destacados = () => {
    return (
        <>
            <h3 className="mt-5">Nuestros productos destacados!</h3>
            <div className="cards d-flex flex-wrap justify-content-around mt-4">
                {[
                    { imgSrc: "../../public/img/MOUSEPAD9.jpg", title: "Mousepad Cougar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
                    { imgSrc: "../../public/img/JOYSTICK13.jpg", title: "Joystick PS5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
                    { imgSrc: "../../public/img/MICROFONO6.jpg", title: "Microfono HyperX", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
                    { imgSrc: "../../public/img/AURICULAR4.jpg", title: "Auriculares HyperX", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
                    { imgSrc: "../../public/img/MOUSEPAD7.jpg", title: "Teclado mecanico", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." }
                ].map((product, index) => (
                    <div className="card" style={{ width: '18rem' }} key={index}>
                        <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.text}</p>
                            <a href="#" className="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Destacados;

import {Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Juegos from '../pages/Juegos'
import Perifericos from '../pages/Perifericos'
import Formulario from '../pages/Formulario'

const Public  = ()  => {

    return(
        <>
        <Routes>

            <Route path="/" element={<Home />}/>    
            <Route path="/juegos" element={<Juegos />}/>
            <Route path="/perifericos" element={<Perifericos />}/>
            <Route path="/formulario" element={<Formulario />}/>

        </Routes>
        </>
        
    )
}

export default Public;
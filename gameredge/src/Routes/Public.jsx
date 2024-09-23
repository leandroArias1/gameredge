import {Route, Routes} from "react-router-dom";

import Home from '../pages/Home';
import Juegos from '../pages/Juegos'
import Perifericos from '../pages/Perifericos'
function Public (){
    return(
        <Routes>

            <Route path="/" element={<Home />}/>    
            <Route path="/juegos" element={<Juegos />}/>
            <Route path="/perifericos" element={<Perifericos />}/>
            
        </Routes>
    )
}

export default Public;

import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Alien from './componentes/Alien';
import Cora from './componentes/Cora';
import Fenix from './componentes/Fenix';
import Gato from './componentes/Gato';
import Luces from './componentes/Luces';
import Lupa from './componentes/Lupa';
import Navegacion from './componentes/Navegacion';

function App() {
  return (
  <BrowserRouter>
  <div className="container">
    <h1 className="text-center mt3 mb-3">
      Daniel Galeria
    </h1>
  </div>
   <Route path="/Alien" component ={Alien} />
   <Route path="/Cora" component ={Cora} />
   <Route path="/Fenix" component ={Fenix} />
   <Route path="/Gato" component ={Gato} />
   <Route path="/Luces" component ={Luces} />
   <Route path="/Lupa" component ={Lupa} />

   <Navegacion/>
  </BrowserRouter>
  );
}

export default App;

import { Link } from "react-router-dom";
import '../../../../frontend/src/styles/layout.css'


const Nav = (props) => {
    return (
        <nav>
            <div className="container">
                
                <Link to="/"><p class="logo">Tu Música Ahora!</p></Link>
                <Link to="Quienessomos">Quienes somos</Link>
                <Link to="Nuestrosprogramas">Nuestro programas</Link>
                <Link to="Registrate">Registrate</Link> 
                
            </div>
        </nav>
        
    );
}
export default Nav;
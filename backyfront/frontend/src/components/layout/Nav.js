import { Link } from 'react-router-dom'

import '../../../../frontend/src/pages/styles/nav.css'


const Nav = (props) => {
    return (
        <nav>
            <div className="container">         
                    <Link className='logo'to="/">Tu Música Ahora!</Link>
                    <div className="logo2">
                        <Link to="Quienessomos">Quienes somos</Link>
                        <Link to="Nuestrosprogramas">Nuestros programas</Link>
                        <Link to="Registrate">Registrate</Link>   
                    </div>                
            </div>
        </nav>
        
    );
}
export default Nav;
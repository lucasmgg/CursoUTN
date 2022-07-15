
import '../../../../frontend/src/styles/style.css'


const Nav = (props) => {
    return (
        <nav>
            <div className="container">
                
                <header>
                    <div class="container">
                        <a href="/"><p class="logo">Tu Música Ahora!</p></a>
                        <nav>
                    <a href="Quienessomos.html">Quienes somos</a>
                    <a href="Nuestrosprogramas.html">Nuestro programas</a>
                    <a href="Registrate.html">Registrate</a>
                        </nav>
                    </div>
                </header>
                    
            </div>
        </nav>
        
    );
}
export default Nav;
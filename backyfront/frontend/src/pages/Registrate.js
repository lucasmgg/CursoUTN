import '../styles/Registrate.css'

const Registrate = (props) => {
    return (
        <body>
        <div className='parte1'>
            <form action="../form-result.php" target="_blank">
                <p>Ingresa tu nombre completo: <input type="text" name="nombrecompleto"></input>
                    <input type="submit" value="Enviar la información"></input>
                </p>
            </form>
        </div>

        <div className='parte2'>
            <form action="../form-result.php" target="_blank">
                <p>Ingresa tu nombre completo: <input type="text" name="nombrecompleto"></input></p>
                <p> Deja un mensaje:<br></br>
            <textarea name="mensaje"></textarea></p>

            <input type="submit" value="Enviar la información"></input>
            </form>
        </div>
        </body> 

        
    );
}

export default Registrate;
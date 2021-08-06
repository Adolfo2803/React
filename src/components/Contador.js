import React, {useState,Fragment} from 'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => { 

        console.log('Has dado Click')
        setNumero(numero + 1);
    };



    return ( 
        <Fragment>
            <h3>Mi primer componente en React {numero}</h3>
        <button onClick={aumentar}>aumentar</button>
        </Fragment>
     );
}
 
export default Contador;

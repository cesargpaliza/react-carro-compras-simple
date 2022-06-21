import { Component } from "react";
import BubleAlert from "./BubleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
    carro: {
        backgroundColor: '#2ECC71',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    buble: {
        position: 'relative',
        left: 12,
        top: 20,

    },
}

class Carro extends Component{

    render(){
        const { carro, esCarroVisible, mostrarCarro} = this.props;
        const cantidad = carro.reduce((acc, el)=> acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.buble}>
                    { cantidad > 0 
                        ?<BubleAlert value={cantidad}/>
                        : null
                    }
                </span>
                <button 
                    onClick = {mostrarCarro}
                    style={styles.carro}
                >
                🛒 Carrovich
                </button>
                { esCarroVisible
                    ? <DetallesCarro carro={carro} />
                    : null
                }
                
            </div>
        )
    }
}

export default Carro;
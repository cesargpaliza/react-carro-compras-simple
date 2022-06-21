import { Component } from "react";
import Button from './Button';

const styles = {
    producto: {
        backgroundColor: '#F5F5F5',
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.2)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '10px',
        cursor: 'pointer'
    },
    img: {
        width: '100%',
        
        border: 'solid 1px #eee',
        borderRadius: '10px',
    }
}

class Producto extends Component {        
 
    render(){
        const {producto, agregarAlCarro} = this.props;
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}

export default Producto
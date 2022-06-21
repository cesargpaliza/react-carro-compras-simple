import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#1877F2',
        color: '#ffe',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '8px'
    }
}

class Button extends Component{
    render(){
        return(
            <button
                style={styles.button}
                {...this.props}
            />
        )
    }


}

export default Button;
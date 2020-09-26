import React from 'react';

class CartItem extends React.Component{
    //change quantity with increase decrease button
    onChangeQuantity = (increase) =>{
        this.setState((prevState) => {
           return{
            qty : increase ? prevState.qty + 1 : !increase && prevState.qty !== 0 ? prevState.qty - 1 : prevState.qty,
           }
        })
    }

    render(){
        const {price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>Rs: {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img 
                        alt="increase" 
                        src="https://www.flaticon.com/svg/static/icons/svg/875/875068.svg" className="action-icons"
                        onClick={() => this.onChangeQuantity(true)}
                        />
                        <img 
                        alt="decrease" 
                        src="https://www.flaticon.com/svg/static/icons/svg/54/54373.svg" className="action-icons"
                        onClick={() => this.onChangeQuantity(false)}
                        />
                        <img 
                        alt="delete" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" className="action-icons"
                        // onClick={this.deleteItem}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,
        background: "#ccc",
    }
}

export default CartItem;
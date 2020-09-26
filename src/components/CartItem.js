import React from 'react';

const CartItem = (props) => { 
    const {price, title, qty, img} = props.product;
    const {onChangeQuantity, onDelete, index} = props;

    return(
        <div className="cart-item">
            <div className="left-block">
                <img src={img} alt="product image" style={styles.image}/>
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
                    onClick={() => onChangeQuantity(index, true)}
                    />
                    <img 
                    alt="decrease" 
                    src="https://www.flaticon.com/svg/static/icons/svg/54/54373.svg" className="action-icons"
                    onClick={() => onChangeQuantity(index, false)}
                    />
                    <img 
                    alt="delete" 
                    src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" className="action-icons"
                    onClick={() => onDelete(index)}
                    />
                </div>
            </div>
        </div>
    )
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
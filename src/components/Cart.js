import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
           products:[
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: '',
                id: 1,
            },
            {
                price: 99,
                title: 'Watch',
                qty: 10,
                img: '',
                id: 2,
            },
            {
                price: 49999,
                title: 'Laptop',
                qty: 1,
                img: '',
                id: 3,
            },
           ]
        }
    }

    handleChangeQuantity = (index, increase) =>{
        const duplicateProductArray = [...this.state.products];

        duplicateProductArray[index].qty = increase ? duplicateProductArray[index].qty + 1 : !increase && duplicateProductArray[index].qty !== 0 ? duplicateProductArray[index].qty - 1 : duplicateProductArray[index].qty;

        this.setState({
            products: duplicateProductArray,
        })
    }

    handleDelete = (index) => {
        const duplicateProductArray = [...this.state.products];
        duplicateProductArray.splice(index, 1);

        this.setState({
            products: duplicateProductArray,
        })
    }

    render() { 
        const {products} = this.state;
        return ( 
            <div className="cart">
                {products.map((product, index) => 
                    <CartItem 
                    product={product} 
                    key={index}
                    index={index}
                    onChangeQuantity={this.handleChangeQuantity}
                    onDelete={this.handleDelete}
                    />
                )}
            </div>
         );
    }
}
 
export default Cart;
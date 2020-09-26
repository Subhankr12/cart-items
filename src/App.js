import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

class App extends React.Component {
    constructor(){
      super();
      this.state={
        products:[
          {
              price: 999,
              title: 'Mobile Phone',
              qty: 1,
              img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              id: 1,
          },
          {
              price: 99,
              title: 'Watch',
              qty: 10,
              img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80',
              id: 2,
          },
          {
              price: 49999,
              title: 'Laptop',
              qty: 1,
              img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
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

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let total = 0;

    products.forEach((product) => {
      total = total + product.qty * product.price;
    })

    return total;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
       <Cart 
        products={products}
        onChangeQuantity={this.handleChangeQuantity}
        onDelete={this.handleDelete}
       />
       <div style={{fontSize: 20, padding: 10}} >TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

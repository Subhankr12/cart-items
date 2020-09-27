import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    //   firebase
    //     .firestore()
    //     .collection("products")
    //     .get()
    //     .then((snapshot) => {
    //       const products = snapshot.docs.map((doc)=>{
    //         return doc.data();
    //     });

    //     this.setState({
    //       products,
    //       loading: false,
    //     })
    // })

    this.db.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  handleChangeQuantity = (index, increase) => {
    // const duplicateProductArray = [...this.state.products];

    // duplicateProductArray[index].qty = increase
    //   ? duplicateProductArray[index].qty + 1
    //   : !increase && duplicateProductArray[index].qty !== 0
    //   ? duplicateProductArray[index].qty - 1
    //   : duplicateProductArray[index].qty;

    // this.setState({
    //   products: duplicateProductArray,
    // });

    const { products } = this.state;

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: increase
          ? products[index].qty + 1
          : !increase && products[index].qty !== 0
          ? products[index].qty - 1
          : products[index].qty,
      })
      .then(() => {
        console.log("Updated Successfully");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  handleDelete = (index) => {
    // const duplicateProductArray = [...this.state.products];
    // duplicateProductArray.splice(index, 1);

    // this.setState({
    //   products: duplicateProductArray,
    // });

    const { products } = this.state;

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted Successfully");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;

    products.forEach((product) => {
      total = total + product.qty * product.price;
    });

    return total;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "washing machine",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 10, fontSize: 20}}>Add new product</button> */}
        <Cart
          products={products}
          onChangeQuantity={this.handleChangeQuantity}
          onDelete={this.handleDelete}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

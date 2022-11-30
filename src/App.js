import React, {Fragment, useState, useEffect} from "react";
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList'

function App() {

  const [products, setproducts] = useState([])

    useEffect(() => {
    const getProducts = () => {
      fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(res => setproducts(res))
    }
    getProducts()
    }, [])

  return (
    <Fragment>
      <Navbar brand= 'Tienda Virtual'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Productos</h2>
            <ProductsList products={products}/>
          </div>
          <div className="col-5">
          <h2 style={{textAlign: 'center'}}> Formulario para crear Productos</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, {Fragment, useState, useEffect} from "react";
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList'
import Form from './components/Form'

function App() {

  const [product, setProduct] = useState({
    name: '',
    precio: '',
    fabricado:'',
    fecha_vencimiento: ''

  })

  const [products, setproducts] = useState([])

  const [listUpdated, setListUpdated] = useState(true)

    useEffect(() => {
    const getProducts = () => {
      fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(res => setproducts(res))
    }
    getProducts()
    setListUpdated(true)
    }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand= 'Tienda Virtual'/> 
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Productos</h2>
            <ProductsList products={products} listUpdated={listUpdated} setListUpdated={setListUpdated}/>   
          </div>
          <div className="col-5">
          <h2 style={{textAlign: 'center'}}> Formulario para crear Productos</h2>
          <Form product={product} setProduct={setProduct} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

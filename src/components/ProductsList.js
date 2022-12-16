

const ProductsList = ({products,setListUpdated}) => {

    const handleDelete = codigo => {
        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:4000/products/'+ codigo, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }
        
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>CODIGO</th>
                    <th>Nombre del Producto</th>
                    <th>PRECIO</th>
                    <th>FABRICADO</th>
                    <th>FECHA VENCIMIENTO</th>
                    <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                {products.map(products => ( 
                 <tr key={products.codigo}>
                     <td>{products.codigo}</td>
                     <td>{products.name}</td>
                     <td>{products.precio}</td>
                     <td>{products.fabricado}</td>
                     <td>{products.fecha_vencimiento}</td>
                     <td>
                        <div className="mb-3">
                            <button onClick={() => handleDelete(products.codigo)} className="btn btn-danger">DELETE</button>

                        </div>
                     </td>
            
                 </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ProductsList;
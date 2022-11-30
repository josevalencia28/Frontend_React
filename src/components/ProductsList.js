import React from "react";

const ProductsList = ({products}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>CODIGO</th>
                    <th>NAME</th>
                    <th>PRECIO</th>
                    <th>FABRICADO</th>
                    <th>FECHA VENCIMIENTO</th>
                </tr>
            </thead>
            <tbody>
                {products.map(products => ( 
                 <tr key={products.codigo}>
                     <th>{products.codigo}</th>
                     <th>{products.name}</th>
                     <th>{products.precio}</th>
                     <th>{products.fabricado}</th>
                     <th>{products.fecha_vencimiento}</th>
                 </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductsList;
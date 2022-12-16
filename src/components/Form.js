import React from "react";

const Form = ({product, setProduct}) => {
    

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    let {name, precio, fabricado, fecha_vencimiento} = product


    const handlesSubmit = () => {
        //validacion de datos
        if( name === '' || precio === '' ||fabricado === '' || fecha_vencimiento === '') {
                alert('Todos los campos son Obligatorios')
                return
              
        }
            //Consulta
            const requestInit = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },

                body: JSON.stringify(product)
            }

            fetch('http://localhost:4000/products', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            //Reiniciando
            setProduct({
                name: '',
                precio: '',
                fabricado:'',
                fecha_vencimiento: ''
            })

    }

    return (
        <form onSubmit={handlesSubmit}>
             <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre del Producto</label>
                <input name="name" onChange={handleChange} type="text" id="name" className="form-control"/>
             </div>
             <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input name="precio" onChange={handleChange} type="number" id="precio" className="form-control"/>
             </div>
             <div className="mb-3">
                   <label htmlFor="fabricado" className="form-label">Fabricado</label>
                   <input name="fabricado" onChange={handleChange} type="text" id="fabricado" className="form-control"/>
             </div>
             <div className="mb-3">
                  <label htmlFor="fecha_vencimiento" className="form-label">Fecha Vencimiento</label>
                  <input name="fecha_vencimiento" onChange={handleChange}  type="date" id="fecha_vencimiento" className="form-control"/>  
             </div>
                <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
}


export default Form;
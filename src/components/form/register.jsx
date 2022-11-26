import React, { useRef } from 'react'

const Register = () => {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault();
        //console.log("procesando...")
        const datos = new FormData(formulario.current)
        //console.log(...datos.entries());

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)

        const {description,todoName } = objetoDatos;
        if ( !description.trim() || !todoName.trim()){
            console.log("nooooooooooooooo, esta vacia ")
            return
        }

        console.log("paso validaciones");
    }

    return (
        <div className='container p-2'>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input
                    name='todoName'
                    placeholder='Ingrese Todoname'
                    type='text'
                    className='form-control mb-2'
                    defaultValue="nombre TODO"
                />
                <textarea
                    name='description'
                    placeholder='Descripcion'
                    className='form-control mb-2'
                    defaultValue="Descripciooooooon de todo"
                />
                <select name='tipoPlayer' className='form-control mb-2'>  
                    <option value='miembro'>miembro</option>
                    <option value='recluta'>recluta</option>
                </select>
                <button className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    )
}

export default Register
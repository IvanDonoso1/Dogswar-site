import React, { useState } from 'react'
import Alert from '../alert/alert';

const RegisterUser = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        description: '',
        tipoPlayer: 'recluta',
        mayorEdad: false
    });
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const {todoName, description} = todo
        if ( !description.trim() || !todoName.trim()){
            setError(true)
            console.log("nooooooooooooooo, esta vacia ")
            return
        }
        setError(false)
    }

    const handleChange = e => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const {name, type, checked, value} = e.target
        setTodo({...todo, [name]: type === "checkbox" ? checked :value})
    }



    return (
        <>
            <div className='container p-2'>
                {
                    error ? <Alert text='Campos obligatorios, bebe'/> : null
                }
                <form onSubmit={handleSubmit}>
                    <input
                        name='todoName'
                        placeholder='Ingrese Todoname'
                        type='text'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={todo.todoName}
                    />
                    <textarea
                        name='description'
                        placeholder='Descripcion'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={todo.description}
                    />
                    <select
                        name='tipoPlayer'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={todo.tipoPlayer}
                    >
                        <option value='miembro'>miembro</option>
                        <option value='recluta'>recluta</option>
                    </select>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name='mayorEdad'
                            checked={todo.mayorEdad}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault">
                            Mayor de edad ?
                        </label>
                    </div>
                    <button className='btn btn-primary' type='submit'>Agregar</button>
                </form>
            </div>
        </>
    )
}

export default RegisterUser
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';



const RegisterUser = ({addUser}) => {
    const initialState = {
        name: '',
        description: '',
        tipoPlayer: 'recluta',
        mayorEdad: false
    }

    const [user, setUser] = useState(initialState);

    const {name, description, tipoPlayer, mayorEdad } = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !name.trim()){
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'Debe ingresar un nombre valido',
                icon: 'error',
            })
            return
        }
        if ( !description.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'Debe ingresar una descripcion valida',
                icon: 'error',
            })
            return
        };

        Swal.fire({
            title: 'Exito !',
            text: 'Tarea agregada',
            icon: 'success',
        });
        
        addUser({
            name : name,
            description: description,
            tipoPlayer: tipoPlayer === 'recluta' ? false : true,
            mayorEdad: mayorEdad,
            id: uuidv4()
        });
        console.log(user)
        
        setUser(initialState);
        
    };
    
    const handleChange = e => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const {name, type, checked, value} = e.target
        setUser((old) => ({...old, [name]: type === "checkbox" ? checked :value}))
    }



    return (
        <>
            <div className='container p-2'>
                <form onSubmit={handleSubmit}>
                    <input
                        name='name'
                        placeholder='Ingrese nombre'
                        type='text'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={name}
                    />
                    <textarea
                        name='description'
                        placeholder='Descripcion'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={description}
                    />
                    <select
                        name='tipoPlayer'
                        className='form-control mb-2'
                        onChange={handleChange}
                        value={tipoPlayer}
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
                            checked={mayorEdad}
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

export default RegisterUser;
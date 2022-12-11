import React, { useState } from 'react'
import RegisterUser from './registerUser'

const UserList = () => {

    const [users, setUsers] = useState([]);

    const agregarUser = (user) => {
        console.log(user);
        setUsers((old) => [...old, user]);
    }

    return (
        <>
            <RegisterUser agregarUser={agregarUser} />
        </>
    )
}

export default UserList;
import React, { useState } from 'react'
import RegisterUser from './registerUser'

const UserList = () => {

    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        console.log(user);
        setUsers((old) => [...old, user]);
    }

    return (
        <>
            <RegisterUser addUser={addUser} />
        </>
    )
}

export default UserList;
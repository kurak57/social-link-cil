import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.get(`${baseUrl}/token`, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                });
                setToken(response.data.accessToken);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        };
        refreshToken();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get(`${baseUrl}/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        };

        if (token) {
            getUsers();
        }
    }, [token]);

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`${baseUrl}/users/${userId}`);
            const updatedUsers = users.filter(user => user.uuid !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='pl-2 mb-2'>
                <h1 className='title'>Users</h1>
                <h2 className='subtitle'>List of Users</h2>
                <Link to={"/users/add"} className='button is-primary'>Add New</Link>
            </div>
            <div className='table-container px-2'>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Fakultas</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.uuid}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.fakultas}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info' >Edit</Link>
                                    <button onClick={() => deleteUser(user.uuid)} className='button is-small is-danger' >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Userlist;

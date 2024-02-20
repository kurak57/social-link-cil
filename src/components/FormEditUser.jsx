import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
const baseUrl = process.env.REACT_APP_BASE_URL;

const FormEditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

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

    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${baseUrl}/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setName(response.data.name);
                setEmail(response.data.email)
                setRole(response.data.role)
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        if (token) {
        getUserById();
        }
    }, [id, token]);

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.get(`${baseUrl}/token`, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
            });
                setToken(response.data.accessToken);

            await axios.patch(`${baseUrl}/users/${id}`, {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate("/users");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>Update User</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={updateUser}>
                    <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                            <label className='label'>Nama</label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Nama' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Email</label>
                            <div className="control">
                                <input type="text" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Password</label>
                            <div className="control">
                                <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='******' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Konfirmasi Password</label>
                            <div className="control">
                                <input type="password" className="input" value={confPassword} onChange={(e)=> setConfPassword(e.target.value)} placeholder='******' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Role</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={role} onChange={(e)=> setRole(e.target.value)}>
                                        <option selected>Pilih</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-success">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditUser;
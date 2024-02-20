import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  

const baseUrl = process.env.REACT_APP_BASE_URL;

const Interestlist = () => {
    const [scores, setScores] = useState([]);
    const [token, setToken] = useState('');
    const { user } = useSelector((state) => state.auth);

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
        const getScores = async () => {
            try {
                const response = await axios.get(`${baseUrl}/scores`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setScores(response.data)
                setToken(null)
            } catch (error) {
                console.log(error.response.data.msg);
            }
        };
        if (token) {
            getScores();
        }
    }, [token])

    const deleteScore = async (scoreId) =>{
        try {
            await axios.delete(`${baseUrl}/scores/${scoreId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedScores = scores.filter(score => score.uuid !== scoreId);
            setScores(updatedScores);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='pl-2 mb-2'>
                <h1 className='title'>Interest</h1>
                <h2 className='subtitle'>List of Interest</h2>
                <Link to={"/formq"} className='button is-primary'>Add New</Link>
            </div>
            <div className='table-container px-2'>
                <table className='table is-striped is-narrow is-hoverable is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Fakultas</th>
                            <th>Created By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((interest, index) => (
                            <tr key={interest.uuid}>
                                <td>{interest.name}</td>
                                <td>{interest.fakultas}</td>
                                <td>{interest.user.name}</td>
                                <td>
                                    <div className='columns is-gapless is-mobile'>
                                        <div className='column'>
                                            <Link to={`/interests/minat/${interest.uuid}`} className='button is-small is-success ' >Profil</Link>
                                            <Link to={`/interests/mbkm/${interest.uuid}`} className='button is-small is-success ' >MBKM</Link>
                                        </div>
                                        <div className='column'>
                                            {user && user.role === "admin" && (
                                                <Link to={`/interests/edit/${interest.uuid}`} className='button is-small is-info ' >Edit</Link>
                                            )}
                                            {user && user.role === "admin" && (
                                                <button onClick={() => deleteScore(interest.uuid)} className='button is-small is-danger ' >Delete</button> 
                                            )}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Interestlist;

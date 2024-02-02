import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import XLSX from "xlsx"

const ParseExcel = () => {

    const [excelData, setExcelData] = useState([]);
    const [fileName,setFileName] = useState(null)
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleFile = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        // console.log(fileName);
        const data = await file.arrayBuffer();
        var workbook = XLSX.read(data)

        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        setExcelData(jsonData)
        // console.log(excelData);

        for (let i = 0; i < jsonData.length; i++) {
            let excel = excelData[i]
            // console.log(excel.nama);

            const saveUser = async (e) => {
                e.preventDefault()
                try {
                    await axios.post('http://localhost:5000/users', {
                        name: excel.nama,
                        fakultas: excel.fakultas,
                        email: excel.email,
                        password: excel.npm,
                        confPassword: excel.npm,
                        role: "user"
                    });
                    navigate("/");
                } catch (error) {
                    if(error.response) {
                        setMsg(error.response.data.msg);
                    }
                }
            }
        }
        
    }
  return (
    <div>
        <div className='pl-2'>
            <h1 className='title'>Add Users</h1>
            <h2 className='subtitle'>Batch add with excel file</h2>
            <Link to={"/users/add"} className='button is-primary mb-2'>Add a user</Link>
        </div>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <h3>Parse Excel</h3>
                    
                    <div className="file has-name">
                    <label className="file-label">
                        <input className="file-input" type="file" onChange={(e) => handleFile(e)}/>
                        <span className="file-cta">
                            <span className="file-label">
                                Choose a file…
                            </span>
                        </span>
                        <span className='file-name'>
                        {fileName && (
                        <p> FileName: <span>{fileName}</span></p>
                        )}
                        </span>
                    </label>
                    </div>
                </div>
                <div className='table-container'>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Fakultas</th>
                                <th>Email</th>
                                <th>NPM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.map((eData, index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{eData.nama}</td>
                                <td>{eData.fakultas}</td>
                                <td>{eData.email}</td>
                                <td>{eData.npm}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParseExcel
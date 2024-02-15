import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../Checklist.png";
import React from 'react'

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const res = await axios.get(`http://localhost:5000/users/${param.id}/verify/${param.token}`);
				console.log(res.data.msg);
				setValidUrl(true);
			} catch (error) {
				console.log(error.response.data.msg);
			}
		};
		verifyEmailUrl();
	}, [param]);

  return (
   
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4">
                    {validUrl === true && (
                      <div>
                          <img src={success} alt="success_img" />
                          <h1 className="has-text-centered mb-2">Email verified successfully</h1>
                          <Link to="/">
                              <button className="button is-success is-fullwidth is-centered"
                              onClick={() => setValidUrl(false)}
                              >Login</button>
                          </Link>
                      </div>
                    )}
                    {validUrl === false && (
                      <div className="">
                        <h1 className="has-text-centered has-text-danger is-size-4">Verifikasi Email Tidak ditemukan</h1>
                      </div>
                    )}
                </div>
            </div>
        </div>
      </div>

)
}

export default EmailVerify
import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <div className='pl-2'>
            <h1 className='title'>Dashboard</h1>
            <h2 className='subtitle'>
            Selamat datang <strong> {user && user.name} </strong>
            </h2>
        </div>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">

            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Welcome
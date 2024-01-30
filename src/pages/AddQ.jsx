import React, { useEffect } from 'react'
import Layout from './Layout.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";
// import FormAddQ from '../components/FormAddQ.jsx';
import FormQ from '../components/FormAddQ.jsx';

const AddQ = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=> {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=> {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <FormQ/>
    </Layout>
  );
};

export default AddQ;
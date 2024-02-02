import React, { useEffect } from 'react'
import Layout from './Layout.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";
import ParseExcel from '../components/ParseExcel.jsx';

const AddUserExcel = () => {
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
        <ParseExcel/>
    </Layout>
  );
};

export default AddUserExcel;
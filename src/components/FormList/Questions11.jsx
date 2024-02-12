import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>61. Membuat lukisan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls61' 
                                            value={formData.ls61} onChange={(e)=>
                                            setFormData({...formData, ls61: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs61' 
                                            value={formData.cs61} onChange={(e)=>
                                            setFormData({...formData, cs61: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>62. Merawat anak-anak di panti asuhan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls62' 
                                            value={formData.ls62} onChange={(e)=>
                                            setFormData({...formData, ls62: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs62' 
                                            value={formData.cs62} onChange={(e)=>
                                            setFormData({...formData, cs62: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>63. Mengatasi masalah kesehatan fisik dan emosional pada anak- anak.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls63' 
                                            value={formData.ls63} onChange={(e)=>
                                            setFormData({...formData, ls63: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs63' 
                                            value={formData.cs63} onChange={(e)=>
                                            setFormData({...formData, cs63: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>64. Merancang program sosial kemasyarakatan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls64' 
                                            value={formData.ls64} onChange={(e)=>
                                            setFormData({...formData, ls64: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs64' 
                                            value={formData.cs64} onChange={(e)=>
                                            setFormData({...formData, cs64: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>65. Memberikan konsultasi mengenai investasi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls65' 
                                            value={formData.ls65} onChange={(e)=>
                                            setFormData({...formData, ls65: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs65' 
                                            value={formData.cs65} onChange={(e)=>
                                            setFormData({...formData, cs65: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>66. Menganalisis catatan keuangan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls66' 
                                            value={formData.ls66} onChange={(e)=>
                                            setFormData({...formData, ls66: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs66' 
                                            value={formData.cs66} onChange={(e)=>
                                            setFormData({...formData, cs66: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
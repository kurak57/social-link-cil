import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>91. Menyambut pengunjung saat memasuki gedung.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls91' 
                                            value={formData.ls91} onChange={(e)=>
                                            setFormData({...formData, ls91: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs91' 
                                            value={formData.cs91} onChange={(e)=>
                                            setFormData({...formData, cs91: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>92. Memberikan saran untuk pemecahan masalah.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls92' 
                                            value={formData.ls92} onChange={(e)=>
                                            setFormData({...formData, ls92: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs92' 
                                            value={formData.cs92} onChange={(e)=>
                                            setFormData({...formData, cs92: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>93. Melakukan pemeriksaan laporan keuangan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls93' 
                                            value={formData.ls93} onChange={(e)=>
                                            setFormData({...formData, ls93: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs93' 
                                            value={formData.cs93} onChange={(e)=>
                                            setFormData({...formData, cs93: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>94. Memodifikasi dan memperbaiki masalah teknis suatu peraiatan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls94' 
                                            value={formData.ls94} onChange={(e)=>
                                            setFormData({...formData, ls94: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs94' 
                                            value={formData.cs94} onChange={(e)=>
                                            setFormData({...formData, cs94: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>95. Mernpelajari cara kerja suatu mesin..</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls95' 
                                            value={formData.ls95} onChange={(e)=>
                                            setFormData({...formData, ls95: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs95' 
                                            value={formData.cs95} onChange={(e)=>
                                            setFormData({...formData, cs95: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>96. Merawat tanaman di kebun.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls96' 
                                            value={formData.ls96} onChange={(e)=>
                                            setFormData({...formData, ls96: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs96' 
                                            value={formData.cs96} onChange={(e)=>
                                            setFormData({...formData, cs96: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>19. Mempromosikan barang atau jasa kepada klien.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls19' 
                                            value={formData.ls19} onChange={(e)=>
                                            setFormData({...formData, ls19: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs19' 
                                            value={formData.cs19} onChange={(e)=>
                                            setFormData({...formData, cs19: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>20. Memonitor kinerja para anggota dalam suatu kelompok kerja.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls20' 
                                            value={formData.ls20} onChange={(e)=>
                                            setFormData({...formData, ls20: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs20' 
                                            value={formData.cs20} onChange={(e)=>
                                            setFormData({...formData, cs20: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>21. Mengelola pencatatan keuangan harian dan bulanan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls21' 
                                            value={formData.ls21} onChange={(e)=>
                                            setFormData({...formData, ls21: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs21' 
                                            value={formData.cs21} onChange={(e)=>
                                            setFormData({...formData, cs21: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>22. Membuat, menguji, dan mengelola program komputer.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls22' 
                                            value={formData.ls22} onChange={(e)=>
                                            setFormData({...formData, ls22: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs22' 
                                            value={formData.cs22} onChange={(e)=>
                                            setFormData({...formData, cs22: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>23. Memperbaiki peralatan elektronik.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls23' 
                                            value={formData.ls23} onChange={(e)=>
                                            setFormData({...formData, ls23: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs23' 
                                            value={formData.cs23} onChange={(e)=>
                                            setFormData({...formData, cs23: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>24. Mempelajari astronomi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls24' 
                                            value={formData.ls24} onChange={(e)=>
                                            setFormData({...formData, ls24: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs24' 
                                            value={formData.cs24} onChange={(e)=>
                                            setFormData({...formData, cs24: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>
    )}

export default Questions3;
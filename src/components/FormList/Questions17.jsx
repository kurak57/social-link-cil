import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>97. Menulis cerita naskah.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls97' 
                                            value={formData.ls97} onChange={(e)=>
                                            setFormData({...formData, ls97: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs97' 
                                            value={formData.cs97} onChange={(e)=>
                                            setFormData({...formData, cs97: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>98. Menginisiasi kegiatan donasi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls98' 
                                            value={formData.ls98} onChange={(e)=>
                                            setFormData({...formData, ls98: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs98' 
                                            value={formData.cs98} onChange={(e)=>
                                            setFormData({...formData, cs98: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>99. Memberikan layanan konseling secara personal.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls99' 
                                            value={formData.ls99} onChange={(e)=>
                                            setFormData({...formData, ls99: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs99' 
                                            value={formData.cs99} onChange={(e)=>
                                            setFormData({...formData, cs99: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>100. Menjadi juru kampanye.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls100' 
                                            value={formData.ls100} onChange={(e)=>
                                            setFormData({...formData, ls100: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs100' 
                                            value={formData.cs100} onChange={(e)=>
                                            setFormData({...formData, cs100: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>101. Mengeiola proses pinjaman pada suatu lembaga keuangan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls101' 
                                            value={formData.ls101} onChange={(e)=>
                                            setFormData({...formData, ls101: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs101' 
                                            value={formData.cs101} onChange={(e)=>
                                            setFormData({...formData, cs101: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>102. Meneanalisis eengelolaan suatu usaha.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls102' 
                                            value={formData.ls102} onChange={(e)=>
                                            setFormData({...formData, ls102: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs102' 
                                            value={formData.cs102} onChange={(e)=>
                                            setFormData({...formData, cs102: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
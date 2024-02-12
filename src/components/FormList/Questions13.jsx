import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>73. Menjadi moderator dalam sebuah diskusi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls73' 
                                            value={formData.ls73} onChange={(e)=>
                                            setFormData({...formData, ls73: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs73' 
                                            value={formData.cs73} onChange={(e)=>
                                            setFormData({...formData, cs73: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>74. Memimpin tim untuk mencapai target.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls74' 
                                            value={formData.ls74} onChange={(e)=>
                                            setFormData({...formData, ls74: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs74' 
                                            value={formData.cs74} onChange={(e)=>
                                            setFormData({...formData, cs74: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>75. Menganalisis kondisi keuangan suatu perusahaan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls75' 
                                            value={formData.ls75} onChange={(e)=>
                                            setFormData({...formData, ls75: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs75' 
                                            value={formData.cs75} onChange={(e)=>
                                            setFormData({...formData, cs75: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>76. Mengulas kelebihan dan kekurangan suatu produk teknologi terbaru.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls76' 
                                            value={formData.ls76} onChange={(e)=>
                                            setFormData({...formData, ls76: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs76' 
                                            value={formData.cs76} onChange={(e)=>
                                            setFormData({...formData, cs76: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>77. Menyusun rangkaian listrik.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls77' 
                                            value={formData.ls77} onChange={(e)=>
                                            setFormData({...formData, ls77: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs77' 
                                            value={formData.cs77} onChange={(e)=>
                                            setFormData({...formData, cs77: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>78. Mempelajari kehidupan satwa liar.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls78' 
                                            value={formData.ls78} onChange={(e)=>
                                            setFormData({...formData, ls78: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs78' 
                                            value={formData.cs78} onChange={(e)=>
                                            setFormData({...formData, cs78: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
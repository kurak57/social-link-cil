import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>103. Mempelajari tanaman.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls103' 
                                            value={formData.ls103} onChange={(e)=>
                                            setFormData({...formData, ls103: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs103' 
                                            value={formData.cs103} onChange={(e)=>
                                            setFormData({...formData, cs103: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>104. Memastikan keamanan fasilitas umum.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls104' 
                                            value={formData.ls104} onChange={(e)=>
                                            setFormData({...formData, ls104: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs104' 
                                            value={formData.cs104} onChange={(e)=>
                                            setFormData({...formData, cs104: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>105. Mengecat dinding rumah.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls105' 
                                            value={formData.ls105} onChange={(e)=>
                                            setFormData({...formData, ls105: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs105' 
                                            value={formData.cs105} onChange={(e)=>
                                            setFormData({...formData, cs105: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>106. Memperhatikan kenyamanan peserta kegiatan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls106' 
                                            value={formData.ls106} onChange={(e)=>
                                            setFormData({...formData, ls106: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs106' 
                                            value={formData.cs106} onChange={(e)=>
                                            setFormData({...formData, cs106: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>107. Mempelajari hal-hal terkait mekanis suatu mesin.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls107' 
                                            value={formData.ls107} onChange={(e)=>
                                            setFormData({...formData, ls107: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs107' 
                                            value={formData.cs107} onChange={(e)=>
                                            setFormData({...formData, cs107: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>108. Meniaga dan merawat barang yanglligunakan bersama.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls108' 
                                            value={formData.ls108} onChange={(e)=>
                                            setFormData({...formData, ls108: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs108' 
                                            value={formData.cs108} onChange={(e)=>
                                            setFormData({...formData, cs108: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
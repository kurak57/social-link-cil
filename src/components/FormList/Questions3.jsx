import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>13. Melakukan percobaan dan analisis kimia.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls13' 
                                            value={formData.ls13} onChange={(e)=>
                                            setFormData({...formData, ls13: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs13' 
                                            value={formData.cs13} onChange={(e)=>
                                            setFormData({...formData, cs13: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>14. Memeriksa pekerjaan di pabrik.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls14' 
                                            value={formData.ls14} onChange={(e)=>
                                            setFormData({...formData, ls14: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs14' 
                                            value={formData.cs14} onChange={(e)=>
                                            setFormData({...formData, cs14: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>15. Menjadi anggota bagian perlengkapan di dalam kepanitiaan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls15' 
                                            value={formData.ls15} onChange={(e)=>
                                            setFormData({...formData, ls15: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs15' 
                                            value={formData.cs15} onChange={(e)=>
                                            setFormData({...formData, cs15: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>16. Menata rambut orang lain.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls16' 
                                            value={formData.ls16} onChange={(e)=>
                                            setFormData({...formData, ls16: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs16' 
                                            value={formData.cs16} onChange={(e)=>
                                            setFormData({...formData, cs16: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>17. Memperbaiki sepeda yang rusak.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls17' 
                                            value={formData.ls17} onChange={(e)=>
                                            setFormData({...formData, ls17: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs17' 
                                            value={formData.cs17} onChange={(e)=>
                                            setFormData({...formData, cs17: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>18. Menjual produk.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls18' 
                                            value={formData.ls18} onChange={(e)=>
                                            setFormData({...formData, ls18: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs18' 
                                            value={formData.cs18} onChange={(e)=>
                                            setFormData({...formData, cs18: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
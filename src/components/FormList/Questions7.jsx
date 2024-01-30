import React from "react";

function Questions3({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
                  <div className='field'>
                        <label className='label'>37. Membuat konten tutorial atau panduan dalam mengerjakan sesuatu.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls37' 
                                            value={formData.ls37} onChange={(e)=>
                                            setFormData({...formData, ls37: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs37' 
                                            value={formData.cs37} onChange={(e)=>
                                            setFormData({...formData, cs37: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>38. Mengkoordinasikan kegiatan di antara departemen/tim yang berbeda.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls38' 
                                            value={formData.ls38} onChange={(e)=>
                                            setFormData({...formData, ls38: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs38' 
                                            value={formData.cs38} onChange={(e)=>
                                            setFormData({...formData, cs38: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>39. Melakukan pemeriksaan laporan keuangan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls39' 
                                            value={formData.ls39} onChange={(e)=>
                                            setFormData({...formData, ls39: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs39' 
                                            value={formData.cs39} onChange={(e)=>
                                            setFormData({...formData, cs39: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>40. Menganalisis data (terkait dengan angka) menggunakan statistik.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls40' 
                                            value={formData.ls40} onChange={(e)=>
                                            setFormData({...formData, ls40: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs40' 
                                            value={formData.cs40} onChange={(e)=>
                                            setFormData({...formData, cs40: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>41. Memodifikasi mesin kendaraan</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls41' 
                                            value={formData.ls41} onChange={(e)=>
                                            setFormData({...formData, ls41: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs41' 
                                            value={formData.cs41} onChange={(e)=>
                                            setFormData({...formData, cs41: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>42. Mempelajari kehidupan alam bebas.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls42' 
                                            value={formData.ls42} onChange={(e)=>
                                            setFormData({...formData, ls42: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs42' 
                                            value={formData.cs42} onChange={(e)=>
                                            setFormData({...formData, cs42: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>     
    </div>)}

export default Questions3;
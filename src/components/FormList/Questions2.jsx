import React from "react";


function Questions2({ formData, setFormData }) {
const data = ['Pilih',1,2,3,4,5,6];
  return (
    <div className="content">
        <div className='field'>
                        <label className='label'>7. Menulis puisi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls7' 
                                            value={formData.ls7} onChange={(e)=>
                                            setFormData({...formData, ls7: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs7' 
                                            value={formData.cs7} onChange={(e)=>
                                            setFormData({...formData, cs7: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>8. Ikut dalam kegiatan sosial.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls8' 
                                            value={formData.ls8} onChange={(e)=>
                                            setFormData({...formData, ls8: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs8' 
                                            value={formData.cs8} onChange={(e)=>
                                            setFormData({...formData, cs8: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>9. Membantu menyelesaikan masalah perkembangan anak usia dini.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls9' 
                                            value={formData.ls9} onChange={(e)=>
                                            setFormData({...formData, ls9: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs9' 
                                            value={formData.cs9} onChange={(e)=>
                                            setFormData({...formData, cs9: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>10. Berbicara di depan banyak orang.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls10' 
                                            value={formData.ls10} onChange={(e)=>
                                            setFormData({...formData, ls10: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs10' 
                                            value={formData.cs10} onChange={(e)=>
                                            setFormData({...formData, cs10: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>11. Mempelajari investasi.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls11' 
                                            value={formData.ls11} onChange={(e)=>
                                            setFormData({...formData, ls11: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs11' 
                                            value={formData.cs11} onChange={(e)=>
                                            setFormData({...formData, cs11: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>12. Mempelajari fluktuasi pasar saham.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                    <select name='ls12' 
                                            value={formData.ls12} onChange={(e)=>
                                            setFormData({...formData, ls12: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                    <select name='cs12' 
                                            value={formData.cs12} onChange={(e)=>
                                            setFormData({...formData, cs12: e.target.value })}>
                                            { data.map(opt=><option value={opt}>{opt}</option>) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  );
}

export default Questions2;
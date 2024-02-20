import React from "react";


function Questions1({ formData, setFormData }) {
    const data = ['Pilih',1,2,3,4,5,6];
    const dataFakultas = [
        "Pilih","Ilmu Pengetahuan dan Budaya", "Hukum", "Teknik", "Matematika dan Ilmu Pengetahuan Alam", "Ilmu Komputer", 
        "Farmasi", "Ilmu Sosial dan Politik", "Ilmu Keperawatan","Kedokteran", "Kedokteran Gigi", 
        "Ilmu Administrasi", "Ekonomi dan Bisnis", "Kesehatan Masyarakat", "Psikologi", "Vokasi"
    ]
  return (
    <div className="content">
                        <div className="field">
                            <label className='label'>Nama</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Nama' name='name' 
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Fakultas</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                < select value={formData.fakultas} onChange={(e)=>setFormData({...formData, fakultas: e.target.value })}>
                                    { dataFakultas.map((opt, index) => (<option key={index} value={opt}>{opt}</option>)) }
                                </select >
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>1. Memastikan kenyamanan dan kepuasan pelanggan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls1' 
                                            value={formData.ls1} onChange={(e)=>
                                            setFormData({...formData, ls1: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs1' 
                                            value={formData.cs1} onChange={(e)=>
                                            setFormData({...formData, cs1: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>2. Menjadi pimpinan atau ketua dalam kepanitiaan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls2' 
                                            value={formData.ls2} onChange={(e)=>
                                            setFormData({...formData, ls2: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs2' 
                                            value={formData.cs2} onChange={(e)=>
                                            setFormData({...formData, cs2: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>3. Menyusun proyeksi dan laporan keuangan dari sebuah kegiatan.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls3' 
                                            value={formData.ls3} onChange={(e)=>
                                            setFormData({...formData, ls3: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs3' 
                                            value={formData.cs3} onChange={(e)=>
                                            setFormData({...formData, cs3: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>4. Menulis kode (coding) untuk kebutuhan program komputer.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls4' 
                                            value={formData.ls4} onChange={(e)=>
                                            setFormData({...formData, ls4: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs4' 
                                            value={formData.cs4} onChange={(e)=>
                                            setFormData({...formData, cs4: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>5. Memasang/memodifikas peralatan elektronik.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls5' 
                                            value={formData.ls5} onChange={(e)=>
                                            setFormData({...formData, ls5: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs5' 
                                            value={formData.cs5} onChange={(e)=>
                                            setFormData({...formData, cs5: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                        <label className='label'>6. Mempelajari berbagai jenis flora dan fauna.</label>
                            <div className="columns is-mobile">
                                <div className="control column is-half">
                                    <p>Seberapa Suka</p>
                                    <div className="select is-fullwidth">
                                        <select name='ls6' 
                                            value={formData.ls6} onChange={(e)=>
                                            setFormData({...formData, ls6: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                                <div className="control column is-half">
                                    <p>Seberapa Mampu</p>
                                    <div className="select is-fullwidth">
                                        <select name='cs6' 
                                            value={formData.cs6} onChange={(e)=>
                                            setFormData({...formData, cs6: e.target.value })}>
                                            { data.map((opt, index)=> (<option key={index} value={opt}>{opt}</option>)) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  );
}

export default Questions1;
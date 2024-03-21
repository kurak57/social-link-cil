import {IoAlbums, IoHelpCircle, IoLogoInstagram, IoLogoWhatsapp, IoLogoYoutube, IoReader} from 'react-icons/io5'
import {} from '@fortawesome/fontawesome-svg-core'

const Home = () => {
   
  return (
    <section className="hero has-background-dark is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4 is-mobile">
              <div className='box'>
                <h1 className='title is-3 has-text-black'>IGIP (Indonesian Global Internship Program)</h1>
                <div className="content">
                  <p>Connect with us on social media: 
                    <div>
                    <p>
                    <IoLogoInstagram onClick={() => window.open("https://www.instagram.com/ui.cil/")}/> @ui.cil  <IoLogoWhatsapp/>+6281288899139
                    </p>
                    </div>
                    
                  </p>
                  <button className="button is-fullwidth is-info is-outlined mb-3" onClick={() => window.open("https://bit.ly/IGIP_PendaftaranInternal")} target="_blank" rel="noreferrer">
                  <IoReader/>
                   <p className='ml-1'>
                    Link Pendaftaran Internal IGIP 2024
                    </p>
                    </button>
                  <button className="button is-fullwidth is-info is-outlined mb-3" onClick={() => window.open("https://youtu.be/i0cBw456y28")} target="_blank" rel="noreferrer">
                    <IoLogoYoutube/>
                    <p className='ml-1'>
                      Rekaman Video Sosialisasi
                    </p>
                    </button>
                  <button className="button is-fullwidth is-info is-outlined mb-3" onClick={() => window.open("https://bit.ly/3VmVlLN")} target="_blank" rel="noreferrer">
                  <IoAlbums/>
                    <p className='ml-1'>
                    PPT Sosialisasi dan Template Berkas Persuratan
                    </p>
                    </button>
                  <button className="button is-fullwidth is-info is-outlined mb-3" onClick={() => window.open("https://univindonesia-my.sharepoint.com/:w:/g/personal/cil_office_ui_ac_id/EbfE4f2ZGGtAn3mtcZJzeEIBUyZRxW2F2Tkz9GxhuUku6Q?e=RxoTRg")} target="_blank" rel="noreferrer">
                  <IoHelpCircle/>
                    <p className='ml-1'>
                    FAQ
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

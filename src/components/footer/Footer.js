import React from 'react'
import './Footer.css'



const Footer = () => {
    return (
        
       <div>
           <footer className="row bg-dark">
               <div className="col-lg-2 col-md-4 col-12 offset-lg-2">
                   <p>Møllerup Gods</p>
                   <p>Møllerupvej 26</p>
                   <p>8410 Rønde</p>
               </div>
               <div className="col-lg-2 col-md-4 col-12">
                   <a className="text-light" href="telf:87 58 69 00" target="blank">Telefon 87 58 69 00</a>
                   <a className="text-light" href="mailto:info@moellerup.dk" target="blank">info@moellerup.dk</a>
               </div>
               <div className="col-lg-2 col-md-4 col-12">
                   <ul>
                       <a className="text-light" href="http://www.rubin-freelance.dk/" target="blank">Tekst Lone Rubin</a>
                   </ul>
               </div>
           </footer>
       </div>
    )
}

export default Footer

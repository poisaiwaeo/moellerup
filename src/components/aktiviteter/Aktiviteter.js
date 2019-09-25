import React, {useState } from 'react'
import Aktivit from './Aktivit'


const Aktiviteter = () => {

         //"state" 
         const [aktivitet, setaktivitet] = useState([
            { aktivimg: "aktivitet__01.jpg",titel: "Møllerup Hamp", aktivtekst: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.", id: 1 },
            { aktivimg: "aktivitet__02.jpg",titel: "Møder & events", aktivtekst: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.", id: 2 },
            { aktivimg: "aktivitet__03.jpg",titel: "Fest på kroen", aktivtekst: "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.", id: 3 },
            { aktivimg: "aktivitet__04.jpg",titel: "Rundvisninger", aktivtekst: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. " , id: 4 },
            { aktivimg: "aktivitet__05.jpg",titel: "Hamp hudpleje", aktivtekst: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø." , id: 5 },
            { aktivimg: "aktivitet__06.jpg",titel: "Hamp fødevarer", aktivtekst: "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup." , id: 6 },
            { aktivimg: "aktivitet__07.jpg",titel: "Møllerup bogen", aktivtekst: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. " , id: 7 },
            { aktivimg: "aktivitet__08.jpg",titel: "Møllerup jagt", aktivtekst: "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt." , id: 8 },
            { aktivimg: "aktivitet__09.jpg",titel: "Ferie for 40", aktivtekst: "Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool" , id: 9 },
            { aktivimg: "aktivitet__10.jpg",titel: "Bolig på landet", aktivtekst: "Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund." , id: 10 },
            { aktivimg: "aktivitet__11.jpg",titel: "Hestepension", aktivtekst: "Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald." , id: 11 },
            { aktivimg: "aktivitet__12.jpg",titel: "Verdensballetten", aktivtekst: "Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. " , id: 12 }
         ]);


         const alleAktiviteter = aktivitet.map( a => {
            return(
    
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card mb-4 shadow-sm">
                                    <img className="img-fluid" src={"/img/aktivitetimg/" + a.aktivimg} alt="AKtiviteter" />
                                    <div className="card-body">
                                        <h3 className="card-text"> {a.titel} </h3>
                                        <p className="card-text">  {a.aktivtekst} </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Læs mere her</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
            );
        });


    return (
        <div className="container">
            <section className="row">
            <article className="col-12 bg-waring">
                <h4>Møllerup Gods tilbyder en perlerække af muligheder</h4>
                <p>
                Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv
                </p>
            </article>
            </section>

          <div className="row">
             {alleAktiviteter}
          </div>
        
        </div>
    )
}

export default Aktiviteter

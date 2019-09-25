import React from 'react'
import Dkc from './Dkc'
import Instagram from './Instagram'
import Nyhedsbrev from './Nyhedsbrev'
import './Outtro.css'


const Outtro = () => {
    return (
        <div className="container">

            <div className="row">
                <section className="12">
                <Dkc />
                </section>
            </div>
            
            <div className="row">
                <section className="col-lg-6 col-md-12 col-12 padding">
                       <Instagram/>
                </section>

                <section className="col-lg-6 col-md-12 col-12 padding">
                    <Nyhedsbrev/>
                </section>
            </div>

        </div>
    )
}

export default Outtro

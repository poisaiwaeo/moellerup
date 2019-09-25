import React from 'react'
import dkc from '../../img/dkc.png'


const Dkc = () => {
    return (
        <div className="container">
            <div className="row">
                <figure className="col-12">
                    <img className="img-fluid" src={dkc} alt="Danske konference centre"/>
                </figure>
            </div>

            <div className="row">
                <section className="col-12">
                    <a className="text-dark" href="https://dkbs.dk/" target="_blank">
                   <h6 className="dkc__rubrik"> Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h6>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Dkc

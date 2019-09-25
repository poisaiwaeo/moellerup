import React from 'react'

const Aktivit = (props) => {
    
    let aktivitet = props.alleAktivitProp.map( a => {
        return(

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="img-fluid" src={"/img/aktivitetimg/" + a.aktivimg} alt="AKtiviteter" />
                                <div className="card-body">
                                    <h3 className="card-text"> {a.titel} </h3>
                                    <p className="card-text">  {a.aktivtekst} </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Læs mere her</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

        );
    });


    return (
        <div>
            {aktivitet}
        </div>
    )
}

export default Aktivit

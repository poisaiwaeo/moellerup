import React from 'react'

const Nyhedsbrev = () => {
    return (
        <div className="container ">

            <div className="row bg-light">
                <form className="col-lg-6 col-md-12 col-12" action="/action_page.php" method="get">
                <h4>Tilmeld nyhedsbrev</h4>
                <p className="text-right">*skal udfyldes</p>
                       Email Adress:
                       <input className="border" type="text" name="email"/>
                       <label></label>
                       <br/>
                       Fornavn:
                       <input className="border" type="text" name="name"/>
                       <label></label>
                       <br/>
                       Efternavn:
                       <input className="border" type="text" name="name"/>
                       <label></label>
                       <br/>
                       <h5>Vælg nyhedsbrev</h5>
                       <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                           <label className="custom-control-label" for="defaultUnchecked">Møllerup - alle</label>
                       </div>
                       <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                           <label className="custom-control-label" for="defaultUnchecked">Verdensballetten</label>
                       </div>
                       <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                           <label className="custom-control-label" for="defaultUnchecked">Møllerup Hamp</label>
                       </div>
                       <br/>
                       <button className="border" type="submit" value="Submit">Tilmeld</button>
                </form>
                
            </div>

            
            

        </div>
    )
}

export default Nyhedsbrev

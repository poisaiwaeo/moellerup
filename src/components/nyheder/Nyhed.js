import React, { useState} from 'react'



const Nyhed = () => {
     
     //"state" 
  const [nyhed, setnyhed] = useState([

    { nyhedimg: "nyhed__01.jpg",titel: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtekst: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020", id: 1 },

  ]);

  const alleNyhed = nyhed.map(n => {
    return (

                    <div className=" col-lg-12 col-md-12 col-12" key={n.id}>
                        <div className="card mb-4  shadow-sm">
                            <img className="img-fluid" src={"/img/nyhedimg/" + n.nyhedimg} alt="Nyhed" />
                            <div className="card-body">
                                <h3 className="card-text"> {n.titel} </h3>
                                <p className="card-text">  {n.nyhedtekst} </p>
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
             <div className="row">
               {alleNyhed}
             </div>
        </div>
    );
};

export default Nyhed

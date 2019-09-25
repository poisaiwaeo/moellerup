import React, { useState} from 'react'
import Nyhed from './Nyhed'



const Nyheder = () => {
     
     //"state" 
  const [nyheder, setnyheder] = useState([

    { nyhedimg: "nyhed__02.jpg",titel: "Køb vores hampeprodukter", nyhedtekst: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen.", id: 2 },
    { nyhedimg: "nyhed__03.jpg",titel: "Verdensballetten 2019", nyhedtekst: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods", id: 3 },
    { nyhedimg: "nyhed__04.jpg",titel: "Historien om Møllerup Gods", nyhedtekst: "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven." , id: 4 }

  ]);

  const alleNyheder = nyheder.map(n => {
    return (

                    <div className=" col-lg-4 col-md-4 col-12" key={n.id}>
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
               <section className="col-lg-12 col-md-12 col-12">
               <Nyhed/>
               </section>
             </div>

             <div className="row">
               {alleNyheder}
             </div>
        </div>
    );
};

export default Nyheder

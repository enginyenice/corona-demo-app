import React from 'react'


const card = (props) => {
    return (

        <div className="col col-md-6 col-sm-12 float-left">
            <div className="card mt-3 mb-3">
                <div className="card-header text-center font-weight-bold text-uppercase text-monospace">
                    <span className="card-title">
                        {props.ulkeAdi}
                    </span>
                </div>
                <div className="card-body text-monospace font-weight-light text-center text-uppercase">
                    <div className="row">
                        <div className="col col-6">
                            İyileşen: <span id="iyilesen" className="text-success font-weight-bold ">{props.iyilesenSayisi}</span>
                        </div>
                        <div className="col col-6">
                            Ölen: <span id="olen" className="text-danger font-weight-bold ">{props.olenSayisi}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center text-uppercase">
                    Tespit Edilen Hasta: <span id="hasta" className="text-primary font-weight-bold ">{props.hastaSayisi}</span>
                </div>
            </div>
        </div>
    )
}

export default card;
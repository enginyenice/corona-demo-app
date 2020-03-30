import React from 'react'
const card = (props) => {
    return (
        <div className="col col-md-4 col col-12 col-sm-12 mb-3 float-left">
            <div className="card bg-info text-center  text-light">
                <div className="card-header">
                    <h3 className="">{props.ulkeAdi}</h3>
                </div>
                <div className="card-body text-monospace text-right text-uppercase">

                    <div className="d-flex justify-content-between">
                        <div className="p-2">Hasta</div>
                        <div className="p-2">
                            <span id="hasta">{props.hastaSayisi}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="p-2">İyileşen</div>
                        <div className="p-2">
                            <span id="iyilesen">{props.iyilesenSayisi}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="p-2">Ölen</div>
                        <div className="p-2">
                            <span id="olen">{props.olenSayisi}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default card;


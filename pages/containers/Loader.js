import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="col col-md-4 col col-12 col-sm-12 mb-3 float-left">
                <div className="card bg-info text-center  text-light">
                    <div className="card-header">
                        <h3 className="">
                            <div class="spinner-border text-light" role="status">
                                <span class="sr-only">Veriler Çekiliyor...</span>
                            </div>
                        </h3>
                    </div>
                    <div className="card-body text-monospace text-right text-uppercase">

                        <div className="d-flex justify-content-between">
                            <div className="p-2">Hasta</div>
                            <div className="p-2">
                            <div class="spinner-border text-light" role="status">
                                <span class="sr-only">Veriler Çekiliyor...</span>
                            </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="p-2">İyileşen</div>
                            <div className="p-2">
                            <div class="spinner-border text-light" role="status">
                                <span class="sr-only">Veriler Çekiliyor...</span>
                            </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="p-2">Ölen</div>
                            <div className="p-2">
                            <div class="spinner-border text-light" role="status">
                                <span class="sr-only">Veriler Çekiliyor...</span>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

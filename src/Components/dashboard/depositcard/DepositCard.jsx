import React from 'react'

export const DepositCard = () => {

    return (
        <>
            <div className="row">
                <div className="col-4 my-2">
                    <div className="shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#193049', color: 'white'}}>
                        <h5 className="card-text">Depositos Rápidos</h5>
                        <div className="card-body">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary">Deposite</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#193049', color: 'white'}}>
                        <h5 className="card-text">Inversiones al minuto</h5>
                        <div className="card-body">
                            <button data-bs-toggle="modal" data-bs-target="#ReinvestModal" className="btn btn-outline-primary">Invierta</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 my-2">
                    <div className="shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#193049', color: 'white'}}>
                        <h5 className="card-text">0% de comision y a la mayor velocidad</h5>
                        <div className="card-body">
                            <button data-bs-toggle="modal" data-bs-target="#WithdrawalModal" className="btn btn-outline-primary form-control">Retire</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

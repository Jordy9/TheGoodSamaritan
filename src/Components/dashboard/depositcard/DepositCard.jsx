import React from 'react'

export const DepositCard = () => {

    return (
        <>
            <div className="row">
                <div className="col-4 mt-5">
                    <div class="card text-center" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <div className="bg-dark text-white card-header">Depositar</div>
                        <div class="card-body">
                            <p class="card-text">Depositos Rápidos</p>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">Deposite</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 mt-5">
                    <div class="card text-center" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <div className="bg-dark text-white card-header">Reinvertir</div>
                            <div class="card-body">
                            <p class="card-text">Inversiones al minuto</p>
                            <button data-bs-toggle="modal" data-bs-target="#ReinvestModal" className="btn btn-primary">Invierta</button>
                        </div>
                    </div>
                </div>

                <div className="col-4 mt-5">
                    <div class="card text-center" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <div className="bg-dark text-white card-header">Retirar</div>
                        <div class="card-body">
                            <p class="card-text">Retiros con 0% de comision y a la mayor velocidad</p>
                            <button data-bs-toggle="modal" data-bs-target="#WithdrawalModal" className="btn btn-primary">Retire</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

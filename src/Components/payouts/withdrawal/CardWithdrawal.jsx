import React from 'react'

export const CardWithdrawal = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Saldo Disponible para Retiro</h5>
                            <p class="card-text" style = {{fontSize: '32px'}}><i className="bi bi-wallet-fill" style = {{color: 'black'}}> </i>100 TRX</p>
                            <p class="text-muted">El tiempo para retiro depende de su banco, por lo que el tiempo que se tome para reflejar el monto en su cuenta bancaria es relevante</p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div class="card">
                        <h5 class="card-header bg-dark text-white">Saldo disponible para retiro</h5>
                        <div class="card-body">
                            <div className="col">
                                <div class="input-group">
                                    <input type="number" class="form-control" placeholder = '100' />
                                    <div class="input-group-append">
                                        <button style = {{cursor: 'not-allowed'}} type = 'button' disabled = 'disable' className="input-group-text">TRX</button>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary form-control mt-3">Retirar</button>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <div class="card">
                        <div class="card-body text-center">
                            <i className="bi bi-cash-coin" style = {{color: 'black', fontSize: '50px'}}></i>
                            <p class="text-muted">El tiempo para retiro depende de su banco, por lo que el tiempo que se tome para reflejar el monto en su cuenta bancaria es relevante, Retiro con 0% de comisión</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

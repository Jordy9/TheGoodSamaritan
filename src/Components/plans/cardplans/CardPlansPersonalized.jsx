import React from 'react'

export const CardPlansPersonalized = () => {
    return (
        <div className = 'row'>
            <div className="col-12">
                <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                <div className="card-header bg-dark" style = {{color: 'white'}}>Plan Personalizado</div>
                <div className="card-body">
                    <h5 className="card-title">Plan Personalizado</h5>
                    <div className="row">
                        <div className="col-6">
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" placeholder = '100' />
                                <div class="input-group-append">
                                    <button style = {{cursor: 'not-allowed'}} type = 'button' disabled = 'disable' className="input-group-text">TRX</button>
                                </div>
                                </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end">
                                <a href="#" className="btn btn-danger form-control">Comprar  <i className="bi bi-cart4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export const DepositModal = () => {

    return (
      <>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Depositar</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Cantidad a depositar</label>
                    <input type="number" className = 'form-control' placeholder = '100 TRX' />
                  </div>

                  <div className="form-group">
                    <label>Tarjeta en uso</label>
                    <input type="text" className = 'form-control' placeholder = 'xxxx 2211' />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary form-control">Pagar</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

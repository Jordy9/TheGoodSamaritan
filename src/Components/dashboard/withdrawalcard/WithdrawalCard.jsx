import React from 'react'

export const WithdrawalCard = () => {
    return (
      <>
        <div className="modal fade" id="WithdrawalModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Retirar</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                
                <div className="form-group">
                  <p className = 'text-center'>Cantidad disponible para retiro</p>
                  <p className = 'text-center'>50</p>
                </div>

                <div className="form-group">
                  <p className = 'text-center'>Cantidad a retirar</p>
                  <input type="number" placeholder = '50' className = 'form-control' />
                </div>

              </form>
              </div>
                <div className="modal-footer">
                  <button className = 'btn btn-primary form-control'>Retirar</button>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

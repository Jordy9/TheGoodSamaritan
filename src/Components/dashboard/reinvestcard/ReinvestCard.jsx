import React from 'react'

export const ReinvestCard = () => {

    return (
      <>
        <div className="modal fade" id="ReinvestModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content shadow p-4 my-2 bg-dark rounded-lg flex-column">
              <div className="modal-header" style = {{border: 'none'}}>
                <h5 className="modal-title text-center" id="exampleModalLabel">Reinvertir</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                
                <div className="form-group">
                  <p>Cantidad a invertir</p>
                  <input type="text" placeholder = '100 TRX' className = 'form-control' style = {{backgroundColor: 'transparent', color: 'white'}} />
                </div>

                <div className="form-group">
                  <input type="text" placeholder = '**** 2211' className = 'form-control' style = {{backgroundColor: 'transparent', color: 'white'}} />
                </div>

              </form>
              </div>
                <div className="modal-footer" style = {{border: 'none'}}>
                  <button className = 'btn btn-outline-primary form-control'>Reinvertir</button>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

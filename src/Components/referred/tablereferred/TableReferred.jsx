import { Popovers } from '../popovers/Popovers'
import './TableReferred.css'

export const TableReferred = () => {
    return (
        <>
        <div className = 'row'>
            <div className="col-7">
            <div className="shadow d-flex p-4 bg-dark rounded-lg flex-column" style = {{overflow: 'auto', maxHeight: '212px'}}>
                <div className="card-body">
                    <table className="table table-hover table-responsive text-white">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </div>

            {/* <div className="col-5">
                <div className="card border-dark">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">LINEAS DIRECTAS</th>
                                <th scope="col">LÍNEAS ACTIVAS DIRECTAS</th>
                                <th scope="col">RECUENTO TOTAL DE RED</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><i className="bi bi-pen" style = {{color: 'rgb(13, 110, 253)'}}> </i>3</td>
                                <td><i className="bi bi-check2-circle" style = {{color: 'green'}}> </i>1</td>
                                <td><i className="bi bi-people" style = {{color: 'gold'}}> </i>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>

        <div className="row">
            <div className="col-6">
                <h1 style = {{marginTop: '70px'}}>Mi link de Referidos</h1>
                <input readOnly type="text" className = 'form-control bg-transparent text-white' value = 'Loremp ipsum sdfjvsjdvfhsgdfj jsdvfjdsjfsd fj 54651dsfds6d5f464dsfjosdkf' />
            </div>
        </div>
    </>
    )
}

import arrow from '../../../heroes/dc-arrow.jpg'
import batman from '../../../heroes/dc-batman.jpg'

export const CardPlans = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                    <img src = {arrow} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Plan Básico</h5>
                        <div className="row">
                            <div className="col-6">
                                <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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

                <div className="col-sm-6">
                    <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                    <img src = {batman} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <div className="row">
                            <div className="col-6">
                                <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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

            <div className="row">
                <div className="col-sm-6">
                    <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <img src = {arrow} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Plan Básico</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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

                <div className="col-sm-6">
                    <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <img src = {arrow} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Plan Básico</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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

            <div className="row">
                <div className="col-sm-6">
                        <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                            <img src = {arrow} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Plan Básico</h5>
                                <div className="row">
                                    <div className="col-6">
                                        <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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
                    
                <div className="col-sm-6">
                    <div className="card mt-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <img src = {arrow} className="img-fluid rounded" alt="..."  style = {{backgroundSize: 'cover', width: '700px', height: '144px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Plan Básico</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text text-muted" style = {{fontSize: '30px'}}>100.0 TRX</p>
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
        </>
    )
}

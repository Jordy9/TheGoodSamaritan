import React from "react"
import { Ticker } from 'react-tradingview-embed'

export const Cards = () => {
    return (
        <>
            <div className = 'row'>
                <Ticker widgetPropsAny={{"newProp": true, 'width': 710, 'height': '185'}} />
                <div className = 'col-6 mt-3'>
                    <div className="card text-dark mb-3" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#212529 ', borderColor: '#193049'}}>
                        <div className="text-center text-white bg-dark my-3" style = {{color: 'white'}}>SALDO DE BILLETERA</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text text-muted" style = {{fontSize: '30px'}}><i className="bi bi-wallet2" style = {{color: '#193049'}}> </i>99.77 TRX</p>
                                </div>

                                <div className="col-6">
                                    <p className="card-text text-muted text-end" style = {{fontSize: '30px'}}><i className="bi bi-currency-dollar" style = {{color: 'green'}}></i></p>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

                <div className="col-6 mt-3">
                    <div className="card text-dark mb-3" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#212529', borderColor: 'gold'}}>
                        <div className="text-center text-white bg-dark my-3" style = {{color: 'white'}}>RECOMPENSAS TOTALES</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="card-text text-muted" style = {{fontSize: '30px'}}><i className="bi bi-trophy" style = {{color: '#efb810'}}> </i>19242.23 TRX</p>
                                    </div>

                                    <div className="col-6">
                                        <p className="card-text text-muted text-end" style = {{fontSize: '30px'}}><i className="bi bi-currency-dollar" style = {{color: 'green'}}> </i></p>
                                    </div>
                                </div>
                            </div>        
                    </div>
                </div>
                            
                <div className="col-6 mt-3">
                    <div className="card text-dark border-success mb-3" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#212529'}}>
                        <div className="text-center text-white bg-dark my-3" style = {{color: 'white'}}>TOTAL DIARIO</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text text-muted" style = {{fontSize: '30px'}}><i className="bi bi-cash-stack" style = {{color: 'green'}}> </i>712.23 TRX</p>
                                </div>

                                <div className="col-6">
                                    <p className="card-text text-muted text-end" style = {{fontSize: '30px'}}>01/11/2021 <i className="bi bi-calendar"></i></p>
                                </div>
                            </div>
                    </div>        
                    </div> 
                </div>    

                <div className="col-6 mt-3">
                    <div className="card text-dark mb-3" style = {{boxShadow: '0px 0px 3px 0px', backgroundColor: '#212529', borderColor: 'white'}}>
                        <div className="text-center text-white bg-dark my-3" style = {{color: 'white'}}>TIPO DE CUENTA</div>
                        <div className="card-body">
                            <p className="card-text text-muted" style = {{fontSize: '30px'}}><i className="bi bi-clipboard-data" style = {{color: 'black'}}> </i>Normal</p>
                        </div>
                    </div>        
                </div> 
            </div>    
        </>
    )
}

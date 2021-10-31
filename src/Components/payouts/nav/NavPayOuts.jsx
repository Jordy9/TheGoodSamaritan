import React from 'react'
import { History } from '../history/History'
import { CardWithdrawal } from '../withdrawal/CardWithdrawal'

export const NavPayOuts = () => {
    return (
        <div className="card mt-3" style = {{overflow: 'auto', height: '550px', border: 'none'}}>
            <div className="card-header" style = {{color: 'white', backgroundColor: 'transparent', border: 'none'}}>
                <nav style = {{color: 'black'}}>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button style = {{color: '#495057'}} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Retirar</button>
                        <button style = {{color: '#495057'}} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Historial</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane show active" id="nav-home" style = {{overflowX: 'hidden', color: 'black'}} role="tabpanel" aria-labelledby="nav-home-tab"><CardWithdrawal /></div>
                    <div className="tab-pane" id="nav-profile" style = {{overflowX: 'hidden'}} role="tabpanel" aria-labelledby="nav-profile-tab"><History /></div>
                </div>
            </div>
        </div>
    )
}

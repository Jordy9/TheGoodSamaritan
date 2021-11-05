import React from 'react'
import { TableSubscriptions } from '../tablesubscriptions/TableSubscriptions'


export const NavSubscriptions = () => {
    return (
        <div className="shadow p-4 bg-dark rounded-lg flex-column" style = {{overflow: 'auto', height: '550px'}}>
            <div className="card-header" style = {{color: 'white', border: 'none'}}>
                <nav style = {{color: 'black'}}>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button style = {{color: '#495057'}} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Todo</button>
                        <button style = {{color: '#495057'}} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Aplicando</button>
                        <button style = {{color: '#495057'}} className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Completados</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div className="tab-pane show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>
                    <div className="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    <div className="tab-pane" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
            </div>

            <div id="nav-home">
                <TableSubscriptions />
            </div>
        </div>
    )
}

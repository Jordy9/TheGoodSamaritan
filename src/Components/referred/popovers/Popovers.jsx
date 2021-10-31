import React from 'react'
import './Popovers.css'

export const Popovers = () => {

  const Face = () => {
    window.open('https://www.facebook.com/GananciasEstiloRealOficial/')
  }

  const Youtu = () => {
    window.open('https://www.youtube.com/channel/UClJ2kHs1rQVlXEUJNZC8aUQ')
  }

    return (
        <>
        <div className="col-6">
            <div className="card border-primary mt-2 mx-auto d-flex justify-content-end" style = {{boxShadow: '0px 0px 3px 0px', height: '50px', width: '115px', cursor: 'pointer'}}>
                <div onClick = {() => Face()} className="bg-transparent border-primary"><i className="bi bi-facebook face d-flex justify-content-center mb-2" style = {{fontSize: '30px'}}></i></div>
            </div>
        </div>

        <div className="col-6">
            <div className="card border-danger mt-2 mx-auto d-flex justify-content-center" style = {{boxShadow: '0px 0px 3px 0px', height: '50px', width: '115px', cursor: 'pointer'}}>
                <div onClick = {() => Youtu()} className="bg-transparent border-danger"><i className="bi bi-youtube youtu d-flex justify-content-center" style = {{fontSize: '33px'}}></i></div>
            </div>
        </div>
        </>
    )
}

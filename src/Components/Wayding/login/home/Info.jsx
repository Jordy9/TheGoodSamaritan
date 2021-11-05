import React from 'react'
import info from '../../../../heroes/info-img.png'

export const Info = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h4 className = 'text-center'>¿Que es bitcoin?</h4>
                    <div className = 'd-flex justify-content-center'>
                        <img src={info} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iste? Nemo ut officia pariatur vero laborum quis non cupiditate, quaerat ea quasi delectus voluptatum velit inventore dolorum eligendi nihil labore?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iste? Nemo ut officia pariatur vero laborum quis non cupiditate, quaerat ea quasi delectus voluptatum velit inventore dolorum eligendi nihil labore?</p>
                </div>
            </div>
        </>
    )
}

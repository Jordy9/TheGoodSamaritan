import React from 'react'
import { Container } from 'react-bootstrap'
import music from '../../../heroes/music.jpg'
import musicaIcono from '../../../heroes/musicaIcono.png'

export const BackGround = ({isPlaying}) => {
  return (
      <Container>
        <div className='row my-5'>
            <div className="col-12">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center" style={{margin: 0, padding: 0}}>
                        <img id={`${(isPlaying) && 'spin'}`} src={music} className = 'img-fluid img-peque' style={{boxShadow: '2px 8px 4px 2px rgba(0,0,0,0.39)', clipPath: 'circle()'}} alt="" />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 flex-column d-flex justify-content-center align-items-center">
                        <img src={musicaIcono} className = 'img-fluid' alt="" />
                        <h3 style={{color: '#3b5998'}} className='text-center'>
                            Llevando el evangelio a cada rincón del mundo
                        </h3>
                    </div>
                </div>
            </div>
        </div>
      </Container>
  )
}

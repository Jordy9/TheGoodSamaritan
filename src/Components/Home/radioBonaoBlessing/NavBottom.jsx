import React from 'react'
import { Navbar } from 'react-bootstrap'
import './rbb.css'

export const NavBottom = ({setIsPlaying}) => {

  const RadioBonaoBendicion = 'https://streaming.rd-o.com/stream/bonaobendicion/'

  return (
    <Navbar expand = 'lg' style={{boxShadow: '2px 2px 4px 8px rgba(0,0,0,0.39)', margin: 0, padding: 0}} fixed = 'bottom' variant="dark" bg="secondary">
      <img src="https://cdn-profiles.tunein.com/s193347/images/logod.png?t=157363" style={{height: '100%', width: '10%', borderRadius: '10px'}} alt="" />
      <audio onPlay={() => setIsPlaying(true)} onPause = {() => setIsPlaying(false)} className='my-2' controls autoPlay>
        <source src={RadioBonaoBendicion || 'http://51.15.160.78:8171/live'}/>
      </audio>
    </Navbar>
  )
}

import React, { useState } from 'react'
import { PrayLives } from './Lives/PrayLives'
import { Zoom } from './Lives/Zoom'

export const Lives = () => {
    
    const [JoinMeeting, setJoinMeeting] = useState(false)
    return (
        <>
            <h1>Zoom</h1>
            <button hidden = {true} className = 'btn btn-outline-primary' id='idZoom' onClick = {() => setJoinMeeting(true)}>Unirme al zoom</button>
            {(JoinMeeting) ? <Zoom /> : <PrayLives />}
        </>
    )
}

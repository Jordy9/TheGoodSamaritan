import React from 'react'
import { PrayLives } from './Lives/PrayLives'
// import { Zoom } from './Lives/Zoom'

export const Lives = () => {
    
    // const [JoinMeeting, setJoinMeeting] = useState(false)
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>En vivo</h1>
            {/* <button className = 'btn btn-outline-primary my-4' onClick = {() => setJoinMeeting(true)}>Unirme al zoom</button> */}
            {/* {(JoinMeeting) ? <Zoom /> : <PrayLives />} */}
            <PrayLives />
        </>
    )
}

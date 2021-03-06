import './Dashboard.css'

import {Carousel} from './carousel/Carousel'
import { CarrouselEvents } from './carousel/CarouselEvents'
import { CarouselSketch } from './carousel/CarouselSketch'
import { ModalSketch } from './modal/ModalSketch'
// import { CarouselCapsule } from './carousel/CarouselCapsule'
// import { ModalCapsule } from './modal/ModalCapsule'
import { VerseOfTheDay } from '../verseOfTheDay/VerseOfTheDay'
import { VideoWordOfTheDay } from './videoVerseOfTheDay/VideoWordOfTheDay'
import { ModalVideoWordOfTheDay } from './modal/ModalVideoWordOfTheDay'

export const Dashboard = () => {
    return (
        <div style={{width: '100%', overflow: 'hidden'}}>
            <h1>Inicio</h1>
            <VerseOfTheDay />
            <VideoWordOfTheDay />
            <Carousel />
            {/* <CarouselCapsule /> */}
            <CarrouselEvents />
            <CarouselSketch />
            <ModalSketch />
            {/* <ModalCapsule /> */}
            <ModalVideoWordOfTheDay />
        </div>
    )
}

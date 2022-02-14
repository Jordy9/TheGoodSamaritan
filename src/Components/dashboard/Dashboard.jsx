import './Dashboard.css'

import {Carousel} from './carousel/Carousel'
import { CarrouselEvents } from './carousel/CarouselEvents'
import { CarouselSketch } from './carousel/CarouselSketch'
import { ModalSketch } from './modal/ModalSketch'
import { ModalMiniSerie } from './modal/ModalMiniSerie'
import { CarouselCapsule } from './carousel/CarouselCapsule'
import { ModalCapsule } from './modal/ModalCapsule'
import { VerseOfTheDay } from '../verseOfTheDay/VerseOfTheDay'

export const Dashboard = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Inicio</h1>
            <VerseOfTheDay />
            <Carousel />
            <CarouselCapsule />
            <CarrouselEvents />
            <CarouselSketch />
            <ModalSketch />
            <ModalMiniSerie />
            <ModalCapsule />
        </>
    )
}

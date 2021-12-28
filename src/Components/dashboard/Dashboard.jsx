import './Dashboard.css'

import {Carousel} from './carousel/Carousel'
import { CarrouselEvents } from './carousel/CarouselEvents'
import { CarouselSketch } from './carousel/CarouselSketch'
import { ModalSketch } from './modal/ModalSketch'
import { ModalMiniSerie } from './modal/ModalMiniSerie'
import { CarouselCapsule } from './carousel/CarouselCapsule'
import { ModalCapsule } from './modal/ModalCapsule'

export const Dashboard = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Inicio</h1>
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

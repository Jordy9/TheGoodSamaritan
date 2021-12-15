import './Dashboard.css'

import {Carousel} from './carousel/Carousel'
import { CarrouselEvents } from './carousel/CarouselEvents'
import { CarouselSketch } from './carousel/CarouselSketch'
import { ModalSketch } from './modal/ModalSketch'
import { ModalMiniSerie } from './modal/ModalMiniSerie'

export const Dashboard = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Iniciodsfsssds</h1>
            <Carousel />
            <CarrouselEvents />
            <CarouselSketch />
            <ModalSketch />
            <ModalMiniSerie />
        </>
    )
}

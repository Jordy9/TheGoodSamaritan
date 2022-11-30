import './Dashboard.css'

import {Carousel} from './carousel/Carousel'
import { CarrouselEvents } from './carousel/CarouselEvents'
import { CarouselSketch } from './carousel/CarouselSketch'
import { ModalSketch } from './modal/ModalSketch'
import { VerseOfTheDay } from '../verseOfTheDay/VerseOfTheDay'
import { VideoWordOfTheDay } from './videoVerseOfTheDay/VideoWordOfTheDay'
import { ModalVideoWordOfTheDay } from './modal/ModalVideoWordOfTheDay'
import { useSelector } from 'react-redux'

export const Dashboard = () => {

    const { activeVideo } = useSelector(state => state.vwd);
    return (
        <div style={{width: '100%', overflow: 'hidden'}}>
            <h1>Inicio</h1>
            <VerseOfTheDay />
            <VideoWordOfTheDay />
            <Carousel />
            <CarrouselEvents />
            <CarouselSketch />
            <ModalSketch />
            {
                (activeVideo)
                    &&
                <ModalVideoWordOfTheDay />
            }
        </div>
    )
}

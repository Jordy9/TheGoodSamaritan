import React from 'react'
import { AboutUsLink } from './AboutUsLink'
import { Carrousel } from './Carrousel'
import { Events } from './Events'
import { ImageMain } from './ImageMain'
import { InfoService } from './InfoService'
import { ModalPray } from './ModalPray'
import { ProfileRandom } from './ProfileRandom'

export const Home = () => {

    return (
        <>
            <ImageMain />
            <InfoService />
            <ModalPray />
            <Events />
            <AboutUsLink />
            <Carrousel />
            <ProfileRandom />
        </>
    )
}

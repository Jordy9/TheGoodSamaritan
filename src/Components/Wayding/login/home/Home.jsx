import React from 'react'
import { AboutUsLink } from './AboutUsLink'
import { Carrousel } from './Carrousel'
import { Events } from './Events'
import { InfoService } from './InfoService'
import { ModalPray } from './ModalPray'
import { ProfileRandom } from './ProfileRandom'

export const Home = () => {

    return (
        <div className = 'all'>
            <Carrousel />
            <InfoService />
            <ModalPray />
            <Events />
            <AboutUsLink />
            <ProfileRandom />
        </div>
    )
}

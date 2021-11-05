import React from 'react'
import { AboutUsLink } from './AboutUsLink'
import { Carrousel } from './Carrousel'
import { Form } from './Form'
import { InfoService } from './InfoService'
import { ProfileRandom } from './ProfileRandom'

export const Home = () => {

    return (
        <>
            <Form />
            <Carrousel />
            <InfoService />
            <ProfileRandom />
            <AboutUsLink />
        </>
    )
}

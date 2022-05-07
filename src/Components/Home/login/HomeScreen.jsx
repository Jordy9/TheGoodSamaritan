import React from 'react'
import { UseRedirectToHttps } from '../../../hooks/UseRedirectToHttps'
import { Home } from './home/Home'

export const HomeScreen = () => {

    UseRedirectToHttps()
    return (
        <>
            <Home />
        </>
    )
}

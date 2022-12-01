import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { showFoote } from '../../../action/user'
import { BackGround } from './BackGround'
import { NavBottom } from './NavBottom'

export const RadioBonaoBlessing = () => {

    const dispatch = useDispatch();

    const [isPlaying, setIsPlaying] = useState(false)

    const { pathname } = useLocation()

    useEffect(() => {
      if (pathname === '/RadioBonaoBlessing') {
        dispatch(showFoote(false))
      } 

      return () => dispatch(showFoote(true))
    }, [dispatch, pathname])
    
    return (
        <>
          <BackGround isPlaying = {isPlaying} />

          <NavBottom setIsPlaying = {setIsPlaying} />
        </>
    )
}

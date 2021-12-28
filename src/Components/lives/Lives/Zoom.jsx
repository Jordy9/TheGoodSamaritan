import React, { useEffect } from 'react'
import { ZoomMtg } from '@zoomus/websdk'

export const Zoom = () => {

const crypto = require('crypto')

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
    return new Promise((res, rej) => {

        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')
    
        res(signature)
    })
}

    let apiKey = '_qZEDubES5uMlI-Rrzotzg'
    let apiSecret = 'ohNGaOc7qmsj2GTkgv76mJkOaAzT7OpawCiO'
    let meetingNumber = 82531085187
    let leaveUrl = 'http://localhost:3000'
    let userName = 'WebSDK'
    let userEmail = 'xilero45@gmail.com'
    let passWord = 'ccbs1234'

    let signature = '' 
    generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
        signature = res
    })

    useEffect(() => {
        showZoomDiv()
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av')
        ZoomMtg.preLoadWasm()
        ZoomMtg.prepareJssdk()
        initiateMeeting()
    }, [])

    const showZoomDiv = () => {
        document.getElementById('zmmtg-root').style.display = 'block'
    }

    const initiateMeeting = () => {
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
              console.log(success)
          
              ZoomMtg.join({
                signature: signature, // role in signature needs to be 0
                apiKey: apiKey,
                meetingNumber: meetingNumber,
                userName: userName,
                passWord: passWord,
                userEmail: userEmail,
                success: (success) => {
                    console.log(success)
                },
                error: (error) => {
                    console.log(error)
                }
            })
          
            },
            error: (error) => {
              console.log(error)
            }
          })
    }
    return (
        <div></div>
        // <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center' id = 'zmmtg-root'></div>
    )
}

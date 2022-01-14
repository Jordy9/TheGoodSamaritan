import React, { useEffect } from 'react'
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

export const Zoom = () => {

const crypto = require('crypto')

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
    return new Promise((res, rej) => {

        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')
    
        return res(signature)
    })
}

    let apiKey = '_qZEDubES5uMlI-Rrzotzg'
    let apiSecret = 'ohNGaOc7qmsj2GTkgv76mJkOaAzT7OpawCiO'
    let meetingNumber = 76839872471
    // let leaveUrl = 'http://localhost:3000'
    let userName = 'CCBS'
    let passWord = 'f36TGQ'

    let signature = ""
    generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
        signature = res
        console.log(signature)
    })

    useEffect(() => {
        const client = ZoomMtgEmbedded.createClient();

        let meetingSDKElement = document.getElementById('meetingSDKElement');

        client.init({
            debug: true,
            zoomAppRoot: meetingSDKElement,
            language: 'es-ES',
            customize: {
                meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
                toolbar: {
                buttons: [
                    {
                    text: 'Custom Button',
                    className: 'CustomButton',
                    onClick: () => {
                        console.log('custom button')
                    }
                    }
                ]
                }
            }
        });
        
        client.join({
            apiKey: apiKey,
            signature: signature, // role in signature needs to be 0
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName
        })

        // console.log(client.leaveMeeting((e) => {
        //     console.log(e)
        // }))

    }, [])

    return (
        <div id='meetingSDKElement'></div>
    )
}

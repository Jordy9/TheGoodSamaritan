import React, { useEffect } from 'react'
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory, useLocation } from 'react-router-dom';

export const Zoom = () => {

    const {pathname} = useLocation()

    const history = useHistory()

    const {Zoom} = useSelector(state => state.zm)

    const {name} = useSelector(state => state.auth)

    const zoom = Zoom[0]

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
    let meetingNumber = zoom?.id
    // let leaveUrl = 'http://localhost:3000'
    let userName = name
    let passWord = `${zoom?.password}`

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
                // buttons: [
                //     {
                //     text: 'Custom Button',
                //     className: 'CustomButton',
                //     onClick: () => {
                //         console.log('custom button')
                //     }
                //     }
                // ]
                }
            }
        });

        if (pathname !== '/Lives') {
            client.leaveMeeting()
        }
        
        client.join({
            apiKey: apiKey,
            signature: signature, // role in signature needs to be 0
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName
        }).catch(e => {
            history.push('/Lives')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'error',
                title: e.reason
              })
        })

        return () => client.leaveMeeting()

    }, [apiKey, signature, meetingNumber, passWord, userName, history, pathname])

    return (
        <div id='meetingSDKElement'></div>
    )
}

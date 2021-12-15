import React from 'react'
import './Messages.css'
import ReactPlayer from 'react-player'

const Telebendicion = 'http://ss8.domint.net:2124/tbt_str/telebendicion/playlist.m3u8'

export const Messages = () => {
    return (
        <div>
                <div className="container">
                    <div className = 'my-5'>
                        <div className="row my-5">
                            <div className="shadow bg-dark p-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
                                <ReactPlayer width = '100vw' height = '100vh' url={Telebendicion} controls playing loop />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

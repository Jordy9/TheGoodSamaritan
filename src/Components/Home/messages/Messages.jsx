import React from 'react'
import './Messages.css'
import ReactPlayer from 'react-player'

const Telebendicion = 'https://ss5.domint.net:3180/tbt_str/telebendicion/playlist.m3u8'

export const Messages = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className = 'my-5'>
                            <div className="shadow bg-dark p-4 d-flex justify-content-center align-items-center">
                                <ReactPlayer width = '100%' height = '100%' url={Telebendicion} controls playing loop />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

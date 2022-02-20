import React from 'react'
import './Messages.css'
import ReactPlayer from 'react-player'

const Telebendicion = 'http://ss5.domint.net:2180/tbt_str/telebendicion/playlist.m3u8'

export const Messages = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className = 'my-5'>
                            <div className="row my-5">
                                <div className="shadow bg-dark p-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
                                    <ReactPlayer width = '100%' height = '100%' url={Telebendicion} controls playing loop />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

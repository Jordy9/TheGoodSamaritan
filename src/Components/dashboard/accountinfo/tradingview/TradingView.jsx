import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'

export const TradingView = () => {
    return (
        <>
            <div className = 'col-12 mt-3'>
                <div className="card text-dark bg-light mb-3" style = {{boxShadow: '0px 0px 3px 0px', height: '600px'}}>
                    <div className="card-body">
                        <TradingViewWidget

                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="fr"
                            autosize
                            hide_side_toolbar = {false}
                            hideideas = {false}
                        />
                    </div>        
                </div>
            </div>   
        </>
    )
}

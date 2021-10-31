import React from "react"
import { Cards } from "./cards/Cards"
import { NavReports } from "./nav/NavReports"

export const Reports = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Informes</h1>
            <Cards />
            <NavReports />
        </>
    )
}

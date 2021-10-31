import React from 'react'
import { TableReferred } from './tablereferred/TableReferred';
import { TreeChart } from './tree/TreeChart';

export const Referred = () => {
    return (
        <>
            <h1 style = {{marginTop: '70px'}}>Referidos</h1>
            <TableReferred />
            <TreeChart />
        </>
    )
}

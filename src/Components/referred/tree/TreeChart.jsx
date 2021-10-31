import React from 'react'
import Tree from 'react-d3-tree';
import './CustomTree.css'

export const TreeChart = () => {
    const orgChart = {
        name: 'Fulano',
            children: [
              {
                name: 'Foreman',
                children: [
                  {
                    name: 'Worker',
                  },
                ],
              },
              {
                name: 'Foreman',
                children: [
                  {
                    name: 'Worker',
                  },
                ],
              },
              {
                name: 'Foreman',
                children: [
                  {
                    name: 'Worker',
                  },
                ],
              },
            ],
      };
    return (
        <>
            <div className="card text-dark bg-light mb-3 mt-3" style = {{boxShadow: '0px 0px 3px 0px', height: '500px'}}>
                <div className="card-header bg-dark" style = {{color: 'white'}}>Red de Referidos</div>
                <div className="card-body">
                    <Tree data={orgChart} rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf" />
                </div>        
            </div>
        </>
    )
}

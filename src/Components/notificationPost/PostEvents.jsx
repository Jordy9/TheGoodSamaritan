import React from 'react'

export const PostEvents = ({notificationPost}) => {
  return (
    <img
        style={{height: '698px', width: '100%'}}
        className="d-block w-100 image-round img-fluid"
        src = {notificationPost?.image}
        alt="First slide"
    />
  )
}

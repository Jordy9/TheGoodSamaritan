import React from 'react'

export const PostEvents = ({notificationPost}) => {
  return (
    <img
        style={{height: '650px'}}
        className="d-block w-100 rounded img-fluid"
        src = {notificationPost?.image}
        alt="First slide"
    />
  )
}

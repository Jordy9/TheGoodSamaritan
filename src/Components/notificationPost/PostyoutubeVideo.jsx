import React from 'react'

export const PostyoutubeVideo = ({notificationPost}) => {
  return (
    <>
      <iframe src = {notificationPost?.urlImage} title="YouTube video player" style={{borderRadius: '40px', height: '100vh', width: '100%'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen" allowfullscreen="allowfullscreen"></iframe>
    </>
  )
}

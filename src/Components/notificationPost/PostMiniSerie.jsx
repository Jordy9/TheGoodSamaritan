import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { scrollToTopAnimatedPost } from '../../helper/ScrollToBottom'

export const PostMiniSerie = ({notificationPost}) => {

    const [first, setfirst] = useState(0)

    const countArray = notificationPost?.descripcion?.length

    useEffect(() => {
      scrollToTopAnimatedPost('description-Serie-Post')
    }, [first])

    useEffect(() => {
    
      return () => {
        setfirst(0)
      }
    }, [])
    
    const next = () => {
      if (countArray - 1 !== first) {
        setfirst(first + 1)
      }
    }

    const prev = () => {
      if (first > 0) {
        setfirst(first - 1)
      }
    }

  return (
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div>
                  {
                    (first === 0)
                      &&
                    <img src={notificationPost?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid my-3" alt="..." />
                  }
                  
                  {
                      (notificationPost)
                      &&
                      parse(notificationPost?.descripcion[first])
                  }

                  <div className="row">
                      <div className="col-6 justify-content-start">
                          <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>
                      </div>

                      <div className="col-6 justify-content-end text-end">
                          <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
  )
}

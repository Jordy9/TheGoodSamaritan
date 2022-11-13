import React from 'react'
import { useSelector } from 'react-redux'
import './Gallery.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../spinner/Spinner';

export const Galleryy = () => {

  const {Gallery: img} = useSelector(state => state.ga)

    const options = {
      buttons: {
        showDownloadButton: false
      }
    };

    const [count, setCount] = useState(0)

    const imgIfinity = () => {
      
      if (img) {
        const allImg = [ ...img ]
        
        return allImg.slice(0, count + 25)
      }
    }

    useEffect(() => {
      if (count > 25) {
        imgIfinity()
      }

    }, [count])

    useEffect(() => {
      return () => {
        setCount(0)
      }
    }, [])
  
    return (
        <>
          <InfiniteScroll dataLength={imgIfinity()?.length || 0} hasMore = {count < img?.length} next = {
            () => setTimeout(() => {
              setCount(prevCount => prevCount + 25)
            }, 1000)
            }
            loader = {<Spinner />}
          >
            <div className="container p-3 my-5">
                  {
                    (img)
                      &&
                    <>
                    <SimpleReactLightbox>
                      <SRLWrapper options={options}>
                        <div className="row">
                          {imgIfinity()?.map(image => {
                            return (
                                <div key={image.image} style={{height: '500px'}} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-2">
                                  <img src={image.image} className='img-fluid my-2 image-round imgag' style={{objectFit: 'cover', height: '100%', width: '100%', cursor: 'pointer'}} alt="" />
                                </div>
                            )
                          })}
                        </div>
                      </SRLWrapper>
                    </SimpleReactLightbox>
                    </>
                  } 
            </div>
          </InfiniteScroll>
        </>
    )
}

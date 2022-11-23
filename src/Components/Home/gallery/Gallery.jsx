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
            <div className="p-3 my-5">
                  {
                    (img)
                      &&
                    <>
                    <SimpleReactLightbox>
                      <SRLWrapper options={options}>
                        <div className="row">
                          {imgIfinity()?.map(image => {
                            return (
                              <div key={image.image} style={{padding: '5px'}} className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                <img src={image.image} style={{cursor: 'pointer', marginTop: '5px', width: '100%'}} alt="" />
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

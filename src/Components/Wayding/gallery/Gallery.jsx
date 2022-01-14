import React from 'react'
import { useSelector } from 'react-redux'
import './Gallery.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

export const Galleryy = () => {

    const {Gallery: img} = useSelector(state => state.ga)


    const options = {
      buttons: {
        showDownloadButton: false
      }
    };

    return (
        <>
            <div className="container shadow bg-dark p-3 my-5">
              {
                (img)
                  &&
                <>

                <SimpleReactLightbox>
                  <SRLWrapper options={options}>
                    {img.map(image => {
                      return (
                        <img src={image.image} className='img-fluid' style={{width: '25%', height: 'auto', cursor: 'pointer'}} alt="" />
                      )
                    })}

                  </SRLWrapper>
                </SimpleReactLightbox>
                </>
              }
            </div>
        </>
    )
}

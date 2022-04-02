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
            <div className="container p-3 my-5">
                  {
                    (img)
                      &&
                    <>
                    <SimpleReactLightbox>
                      <SRLWrapper options={options}>
                        <div className="row">
                          {img.map(image => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                  <img src={image.image} className='img-fluid my-2 rounded imgag' style={{height: '300px', cursor: 'pointer'}} alt="" />
                                </div>
                            )
                          })}
                        </div>
                      </SRLWrapper>
                    </SimpleReactLightbox>
                    </>
                  } 
            </div>
        </>
    )
}

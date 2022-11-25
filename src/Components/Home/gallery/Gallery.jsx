import React from 'react'
import { useSelector } from 'react-redux'
import './Gallery.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../spinner/Spinner';
import { startGetPaginateGallery } from '../../../action/gallery';
import { useDispatch } from 'react-redux';

export const Galleryy = () => {

  const dispatch = useDispatch();

  const {Gallery: img, Paginate} = useSelector(state => state.ga)

    const options = {
      buttons: {
        showDownloadButton: false
      }
    };
  
    return (
        <>
          <InfiniteScroll dataLength={img?.length || 0} hasMore = {Number(Paginate?.page) < Paginate?.total} next = {
            () => dispatch(startGetPaginateGallery(Number(Paginate?.page) + 1)) }
            loader = {<Spinner />}
          >
            <div className="p-3 my-5">
                  {
                    (img)
                      &&
                    <>
                      <SimpleReactLightbox>
                        <SRLWrapper options={options}>
                          <div className="gallery">
                            {img?.map(image => {
                              return (
                                // <div key={image.image} style={{padding: '5px'}} className = 'gallery'>
                                  <img key={image.image} src={image.image} className = 'imageGallery' alt="" />
                                // </div>
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

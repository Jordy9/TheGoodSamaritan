import React from 'react'
import { useSelector } from 'react-redux'
import './Gallery.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../spinner/Spinner';
import { startGetPaginateGallery } from '../../../action/gallery';
import { useDispatch } from 'react-redux';
import ResponsiveGallery from 'react-responsive-gallery'

export const Galleryy = () => {

  const dispatch = useDispatch();

  const {Gallery: img, Paginate} = useSelector(state => state.ga)

    const options = {
      buttons: {
        showDownloadButton: false
      }
    };

    const photos = img?.map(image => {
      return ({
        src: image.image,
      })
    })
  
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
                          <ResponsiveGallery images={photos} />
                        </SRLWrapper>
                      </SimpleReactLightbox>
                    </>
                  } 
            </div>
          </InfiniteScroll>
        </>
    )
}

import React from 'react'

export const ImageGallery = ({ changeSwitch, newImage, handledSelected }) => {
  return (
    <>
        {
            (!changeSwitch)
                ?
            (newImage?.hits?.length !== 0)
                ?
            newImage?.hits?.map(({webformatURL, id}) => {
                return (
                    <div onClick={() => handledSelected(webformatURL, id)} key={webformatURL} className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-2'>
                        <img src={webformatURL} className = 'rounded' style = {{width: '100%', height: '100%', cursor: 'pointer'}} alt="" />
                    </div>
                )
            })
                :
            <>
                <h1 className="text-center image-round bg-dark p-4">
                    Por favor escriba una referencia de la imagen que necesita o suba alguna que tenga.
                </h1>
            </>
                :
            (newImage?.hits?.length !== 0)
                ?
            newImage?.hits?.map(({urls, id}) => {
                const webformatURL = urls?.full
                return (
                    <div onClick={() => handledSelected(webformatURL, id)} key={webformatURL} className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-2'>
                        <img src={webformatURL} className = 'rounded' style = {{width: '100%', height: '100%', cursor: 'pointer'}} alt="" />
                    </div>
                )
            })
                :
            <>
                <h1 className="text-center image-round bg-dark p-4">
                    Por favor escriba una referencia de la imagen que necesita o suba alguna que tenga.
                </h1>
            </>
        }
    </>
  )
}

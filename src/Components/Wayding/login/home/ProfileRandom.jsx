import React from 'react'
import Slider from 'react-slick'
import perfil1 from '../../../../heroes/Perfil1.jpg'
import perfil2 from '../../../../heroes/Perfil2.jpg'
import perfil3 from '../../../../heroes/Perfil3.jpg'
import perfil4 from '../../../../heroes/Perfil4.jpg'

export const ProfileRandom = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="bg-dark">
            <div className = 'container'>
                <Slider {...settings}>
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil1} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Juan Taveras</h3>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Plan Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Reinversiones</h6>
                        </div>
                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil2} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Raul Coste</h3>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Plan Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Reinversiones</h6>
                        </div>
                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil3} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Maria O'Connel</h3>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Plan Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Reinversiones</h6>
                        </div>
                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil4} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Julio Cuevas</h3>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Plan Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Reinversiones</h6>
                        </div>
                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil4} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Julio Cuevas</h3>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Plan Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Reinversiones</h6>
                        </div>
                    </div>  
                </Slider>
            </div>
        </div>
    )
}

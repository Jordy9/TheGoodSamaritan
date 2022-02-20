import React from 'react'
import Slider from 'react-slick'
import perfil1 from '../../../../heroes/pastor1.jpg'
import perfil2 from '../../../../heroes/pastor2.jpg'
import perfil3 from '../../../../heroes/pastor3.jpg'
import perfil4 from '../../../../heroes/pastor4.jpg'
import perfil5 from '../../../../heroes/pastor5.jpg'
import perfil6 from '../../../../heroes/pastor6.jpg'
import perfil7 from '../../../../heroes/pastor7.jpg'

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
                            <h3 className = 'text-white'>Raffi Inoa</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil2} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Edward Ureña</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil3} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Luis García</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil4} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px', margin: 0}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Luis Acosta</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil5} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Felipe Solano</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil6} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Francis Abreu</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  

                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        <div className="person-img">
                            <img src = {perfil7} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h3 className = 'text-white'>Carlos Reyes</h3>
                        </div>

                        <div className="my-3">
                            <h4 className = 'text-white'>Pastor</h4>
                        </div>

                    </div>  
                </Slider>
            </div>
        </div>
    )
}

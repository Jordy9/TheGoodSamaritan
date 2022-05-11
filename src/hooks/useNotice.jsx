import { useEffect } from 'react'
import Swal from 'sweetalert2'
import moment from 'moment'

export const useNotice = (discipleship) => {

    const isOpen = localStorage.getItem('discipleship')
    
    useEffect(() => {
      if (discipleship === true && !!isOpen === false) {
          if (moment().day() === 2 && moment().hour() < 20) {
  
              setTimeout(() => {
                  localStorage.setItem('discipleship', true)
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 5000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    return Toast.fire({
                      icon: 'info',
                      title: 'Dios te bendiga, recuerda que hoy martes, tenemos discipulado a las 8:00 PM'
                    })
              }, 10000);
          }

          if (moment().day() === 1) {
  
              setTimeout(() => {
                  localStorage.setItem('discipleship', true)
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 5000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    return Toast.fire({
                      icon: 'info',
                      title: 'Dios te bendiga, recuerda que mañana tenemos discipulado a las 8:00 PM'
                    })
              }, 10000);
          }
  
          if (moment().day() === 5) {
  
              setTimeout(() => {
                  localStorage.setItem('discipleship', true)
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 5000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    return Toast.fire({
                      icon: 'info',
                      title: 'Dios te bendiga, recuerda que los martes tenemos discipulados a las 8:00 PM'
                    })
              }, 10000);
          }
  
          if (moment().day() === 2 && moment().hour() === 20) {
  
              setTimeout(() => {
                  localStorage.setItem('discipleship', true)
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 5000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    return Toast.fire({
                      icon: 'info',
                      title: 'Dios te bendiga, Debes estar pendiente del zoom, porque está por comenzar el discipulado'
                    })
              }, 10000);
          }
      }
    }, [discipleship, isOpen])
    
}

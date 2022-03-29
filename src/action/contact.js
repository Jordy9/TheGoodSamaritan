import moment from "moment";
import { fetchSinToken } from "../helper/fetch";
import Swal from 'sweetalert2'

export const startCreateContact = (name, email, descripcion) => {
    return async(dispatch) => {

        const date = moment()

        const resp = await fetchSinToken('contact', {name, email, descripcion, date}, 'POST');
        const body = await resp.json()

        const subtitle = 'Nuevo contacto agregado de: '

        const title = name
        
        if (body.ok) {

          const content = body.contactoguardado
          
          await fetchSinToken('notificacionAdmin', {title, subtitle, content}, 'POST');

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
                icon: 'success',
                title: 'Enviado correctamente'
              })
        } else {
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
                icon: 'error',
                title: `${body.msg}`
              })
        }

        
    }
}
import { useEffect } from 'react'
import Swal from 'sweetalert2';

export const useNoticeChat = () => {
    const isOpen = localStorage.getItem('noticeChat')
    
    useEffect(() => {

      if (!!isOpen === false) {
  
        setTimeout(() => {
            localStorage.setItem('noticeChat', true)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            return Toast.fire({
                icon: 'info',
                title: '¿Necesitas consejo, alguna palabra de Dios o desahogarte? ¡entonces este chat es para ti!'
            })
        }, 2000);
      }
    }, [isOpen])
}

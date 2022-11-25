import Swal from "sweetalert2"

export const userMessageToRedirect = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    return Toast.fire({
        icon: 'error',
        title: 'Hubo un problema con su usuario'
    })
}
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import {Types} from '../types/Types';
import Swal from 'sweetalert2'
import axios from 'axios'
import moment from "moment";

export const startLogin = (email, password) => {
    return async(dispatch) => {

        const greeting = moment().hour()
        let greet
        if (greeting >= 0 && greeting <= 11) {
            greet = '🌄 Buenos días'
        } else if (greeting >= 12 && greeting <= 18) {
            greet = '☀️ Buenas tardes'
        } else if (greeting >= 19 && greeting <= 23) {
            greet = '🌙 Buenas noches'
        }

        const resp = await fetchSinToken('users', {email, password}, 'POST');
        const body = await resp.json();
        
        if(body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            await dispatch(login({
                uid: body.uid,
                name: body.name
            }))
            dispatch(setActiveUser())

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
                title: `${greet} ${body.name}`
              })             
        } else {
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
                title: `${body.msg}`
              })
        }
    }
}

export const startLoginGoogle = (response) => {
    return async(dispatch) => {

        const greeting = moment().hour()
        let greet
        if (greeting >= 0 && greeting <= 11) {
            greet = '🌄 Buenos días'
        } else if (greeting >= 12 && greeting <= 18) {
            greet = '☀️ Buenas tardes'
        } else if (greeting >= 19 && greeting <= 23) {
            greet = '🌙 Buenas noches'
        }

        const resp = await fetchSinToken('users/googleAuth', response, 'POST');
        const body = await resp.json();
        
        if(body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            await dispatch(login({
                uid: body.uid,
                name: body.name
            }))
            dispatch(setActiveUser())

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
                title: `${greet} ${body.name}`
              })             
        } else {
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
                title: `${body.msg}`
              })
        }
    }
}

export const startLoginFacebook = (response) => {
    return async(dispatch) => {

        const greeting = moment().hour()
        let greet
        if (greeting >= 0 && greeting <= 11) {
            greet = '🌄 Buenos días'
        } else if (greeting >= 12 && greeting <= 18) {
            greet = '☀️ Buenas tardes'
        } else if (greeting >= 19 && greeting <= 23) {
            greet = '🌙 Buenas noches'
        }        

        const resp = await fetchSinToken('users/facebookAuth', response, 'POST');
        const body = await resp.json();
        
        if(body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            await dispatch(login({
                uid: body.uid,
                name: body.name
            }))
            dispatch(setActiveUser())

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
                title: `${greet} ${body.name}`
              })             
        } else {
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
                title: `${body.msg}`
              })
        }
    }
}


export const startRegister = (name, lastName, email, noBeleaver, password, setfirst) => {
    return async(dispatch) => {

        const sesionDate = moment()
        const resp = await fetchConToken('users/newUser', {name, lastName, email, noBeleaver, password, sesionDate}, 'POST');
        const body = await resp.json();

        if(body.ok) {
            setfirst(true)
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
                icon: 'success',
                title: 'Usuario creado correctamente'
              })

        } else {
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
                title: `${body.msg}`
              })
        }
    }
}

const register = (user) => ({
    type: Types.authStartRegister,
    payload: user
})

export const startGetUsers = () => {
    return async(dispatch, getState) => {
        const resp = await fetchConToken('users');
        const body = await resp.json()

        const {uid, users} = getState().auth

        const user = users?.find(user => user.id === uid)

        if(body.ok) {
            dispatch(getUsers(body.users))
            dispatch(setActiveUser(user))
        }
    }
}

const getUsers = (users) => ({
    type: Types.authStartGetUsers,
    payload: users
})

export const startUpdateUserDate = () => {
    return async(dispatch, getState) => {
        const {activeUser} = getState().auth

        const biliever = false
        const discipleship = false

        await fetchConToken(`users/update/${activeUser?.id}`, {...activeUser, biliever, discipleship}, 'PUT')
    }
}

export const startUpdateUserNoBeleaver = () => {
    return async(dispatch, getState) => {
        const {activeUser} = getState().auth

        const {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password} = activeUser

        const noBeleaver = false

        const resp = await fetchConToken(`users/update/${activeUser?.id}`, {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, noBeleaver}, 'PUT')
        const body = await resp.json()

        if(body.ok) {
            dispatch(updateUser(body.users))

            dispatch(setActiveUser(body.users))
        }
    }
}

export const startUpdateUser = (name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, file, role, age) => {
    return async(dispatch, getState) => {
        const {activeUser} = getState().auth

        const token = localStorage.getItem('token') || '';

        if(file) {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', name)

            if (activeUser?.urlImage) {
                    
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/perfil`, formData, {
                    headers: {'x-token': token},
                    onUploadProgress: (e) =>
                    {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
                })
                
                if (res.data.ok) {
                    const urlImage = res.data.image.url
                    const idImage = res.data.image.id
                    
                    const resp = await fetchConToken(`users/update/${activeUser?.id}`, {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, urlImage, idImage, role, age}, 'PUT')
                    const body = await resp.json()

                    
                    if(body.ok) {
                        dispatch(updateUser(body.users))
                        dispatch(setActiveUser(body.users))
                        dispatch(UploadFish())
                        
                        const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeUser?.idImage}`, {headers: {'x-token': token}})
    
                        console.log(ress)
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
                            icon: 'success',
                            title: 'Usuario actualizado correctamente'
                        })
                    } else {
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
                            title: `${body.msg}`
                        })
                    }
                } else {
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
                        title: `${res.data.msg}`
                    })
                }

            } else{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/perfil`, formData, {
                    headers: {'x-token': token},
                    onUploadProgress: (e) =>
                        {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
                })
    
                if (res.data.ok) {
                    const urlImage = res.data.image.url
                    const idImage = res.data.image.id
                
                    const resp = await fetchConToken(`users/update/${activeUser?.id}`, {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, urlImage, idImage, role, age}, 'PUT')
                    const body = await resp.json()

                    if(body.ok) {
                        dispatch(updateUser(body.users))
                        dispatch(setActiveUser(body.users))
                        dispatch(UploadFish())
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
                            icon: 'success',
                            title: 'Usuario actualizado correctamente'
                        })
                    } else {
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
                            title: `${body.msg}`
                        })
                    }
                } else {
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
                        title: `${res.data.msg}`
                    })
                }
            }

            
        } else {
            const urlImage = activeUser.urlImage
            const idImage = activeUser?.idImage
            const resp = await fetchConToken(`users/update/${activeUser?.id}`, {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, urlImage, idImage, role, age}, 'PUT')
            const body = await resp.json()

            if(body.ok) {
                dispatch(updateUser(body.users))
                dispatch(setActiveUser(body.users))
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
                    icon: 'success',
                    title: 'Usuario actualizado correctamente'
                })
            } else {
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
                    title: `${body.msg}`
                })
            }
        }
    }
}

export const updateUserAdminRoute = (name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, file, role, age) => {
    return async (dispatch, getState) => {

        const { setUser } = getState().auth;

        const urlImage = setUser?.urlImage
        const idImage = setUser?.idImage

            const resp = await fetchConToken(`users/update/${setUser?.id}`, {name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, urlImage, idImage, role, age}, 'PUT')
            const body = await resp.json()

            if(body.ok) {
                dispatch(updateUser(body.users))
                dispatch(ActiveSetUser(body.users))
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
                    icon: 'success',
                    title: 'Usuario actualizado correctamente'
                })
            } else {
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
                    title: `${body.msg}`
                })
            }
    }
}

export const updatTracking = (biliever, discipleship, reset, tracking) => {
    return async (dispatch, getState) => {

        const {activeUser, uid} = getState().auth

        const {socket} = getState().sk

        if (reset) {
            socket?.emit('modal-reset-perfil', uid)
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
                icon: 'success',
                title: 'Usuario actualizado correctamente'
            })
        }

        const resp = await fetchConToken(`users/update/${activeUser?.id}`, {...activeUser, biliever, discipleship, tracking}, 'PUT')
        const body = await resp.json()

        if(body.ok) {
            dispatch(updateUser(body.users))
            dispatch(setActiveUser(body.users))
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
                icon: 'success',
                title: 'Usuario actualizado correctamente'
            })
        } else {
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
                title: `${body.msg}`
            })
        }

        // if (newBeleaver === true || reset === true) {
            
        // }
    }
}

const UploadFish = () => ({
    type: Types.authUploadFinish
  })
  
const upload = (progress) => ({
    type: Types.authUpload,
    payload: progress
})

const updateUser = (user) => ({
    type: Types.authStartUpdateUser,
    payload: user
})

export const updateUserNotification = (user) => ({
    type: Types.authStartUpdateUserNotification,
    payload: user
})

export const ActiverUser = (user) => ({
    type: Types.authSetUser,
    payload: user
})

export const startAuthCheking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('users/renewUser');
        const body = await resp.json();
        
        if(body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            dispatch(checkingFinish())
        }
    }
}

const checkingFinish = () => ({
    type: Types.authCheckingFinish
})


const login = (user) => ({
    type: Types.authLogin,
    payload: user
})

export const ActiveSetUser = (user) => ({
    type: Types.authActiveSetUser,
    payload: user
})

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('token-init-date')
        dispatch(logout())
        dispatch(Petitionlogout())
        localStorage.removeItem('Show')
    }
}

const logout = () => ({
    type: Types.authLogout
})

const Petitionlogout = () => ({
    type: Types.ptLogout
})

export const authModalOpen = (opcion) => ({
    type: Types.authModalOpen,
    payload: opcion
})

export const setActiveUser = () => {
    return async(dispatch, getState) => {

        const {uid, users} = getState().auth

        const user = users?.find(user => user.id === uid)

        dispatch(activeUser(user))
        
    }
}

const activeUser = (user) => ({
    type: Types.authSetUser,
    payload: user
})

export const showFoote = (opcion) => ({
    type: Types.authshowFooter,
    payload: opcion
})

const activeUserRegister = (user) => ({
    type: Types.authSetUserRegister,
    payload: user
})

export const forgotPassword = (email) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('resetPassword', {email}, 'POST')
        const body = await resp.json()

        if(body.ok) {
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
                icon: 'success',
                title: 'Revisa tu correo electrónico'
            })
        } else {
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
                title: `${body.msg}`
            })
        }
    }
}

export const newPassword = (id, name, lastName, date, email, password, role, team, urlImage, tokenUser) => {
    return async(dispatch, getState) => {

        try {

            const resp = await axios.put(`${process.env.REACT_APP_API_URL}/users/resetPassword/${id}`, {name, lastName, date, email, password, role, team, urlImage, tokenUser}, {headers: {'token-user': tokenUser}})

            if (resp.data.ok) {

                dispatch(updateUser(resp.data.usuario))
    
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
                    icon: 'success',
                    title: 'Usuario actualizado correctamente'
                })
            }
        } catch ({response}) {
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
                title: response.data.msg
            })
        }

    }
}

const forgot = (token) => ({
    type: Types.authForgotPassword,
    payload: token
})

export const NotificationPublicAdmin = (notification) => {
    return () => {

        if (notification.image) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                showCloseButton: true,
                background: '#292b2c',
                width: 380
            })
        
            return Toast.fire({
                color: 'white',
                html: `
                    <div class = 'row'>
                        <div class = 'col-9' style="display:flex;align-items: center"><h6>${notification?.subtitle}</h6></div>
                        <div class = 'col-3'><img style = 'height: auto; width: 50px' src = '${notification?.image}' class = 'img-fluid' ></div>
                    </div>
                `
            })
        } else {

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                showCloseButton: true,
                background: '#292b2c',
                width: 380
            })
        
            return Toast.fire({
                color: 'white',
                html: `
                    <div class = 'row'>
                        <div class = 'col-12' style="display:flex;align-items: center; border-radius: 18px"><h6>${notification?.subtitle}</h6></div>
                    </div>
                `
            })
        }
    }
}

const deleteUser = (user) => ({
    type: Types.authDeleteUser,
    payload: user
})

export const startDeleteUser = (user) => {
    return async(dispatch, getState) => {

        const {activeUser} = getState().auth 

        let resp

        resp = await fetchConToken(`users/delete/${user.id}`, activeUser, 'DELETE')

        const body = await resp.json()

        if(body.ok) {
            dispatch(deleteUser(user))
            dispatch(authModalOpen(false))
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
                icon: 'success',
                title: 'Usuario eliminado correctamente'
              })
            } else {

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
                title: 'No tiene privilegios para eliminar a este usuario'
              })

        }
    }
}

export const setNotificationsPost = (notification) => ({
    type: Types.authsetNotificationPost,
    payload: notification
})

export const updateDayNumber = () => {
    return (dispatch, getState) => {
        const {socket} = getState().sk
        const {uid} = getState().auth

        const fecha = moment()

        if (uid) {
            socket?.emit('day-number', uid, fecha)
        }
    }
}

export const updateNoModalReset = (condition) => {
    return (dispatch, getState) => {
        const {socket} = getState().sk
        const {uid} = getState().auth

        if (condition === 'YES') {
            socket?.emit('modal-reset', uid)
        }

        if (condition === 'NO') {
            socket?.emit('modal-noreset', uid)
        }
    }
}
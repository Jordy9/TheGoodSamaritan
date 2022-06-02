import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { startGetCapsules } from '../action/capsule';
import { UsuariosCargados } from '../action/chat';
import { startGetEventos } from '../action/event';
import { startGetMiniSeries, updateSerie } from '../action/miniSerie';
import { BorrarNotificaciones, NotificacionesCargadas } from '../action/notifications';
import { startGetNotificationsUser, StartUpdateNotificationUser } from '../action/notificationsUser';
import { startGetPetitions } from '../action/petition';
import { startGetBosquejos } from '../action/sketch';
import { NotificationPublicAdmin } from '../action/user';
import { startGetVideoWordOfTheDay } from '../action/VideoWordOfTheDay';
import { startGetYoutube } from '../action/youtubeImage';
import { startGetZoom } from '../action/zoom';


export const useSocket = ( serverPath ) => {

    const token = localStorage.getItem('token')

    const dispatch = useDispatch()
    
    const [ socket, setSocket ] = useState(null);
    const [ online, setOnline ] = useState(false);

    const conectarSocket = useCallback(
        () => {
           const socketTemp = io.connect( serverPath, {
                transports: ['websocket'],
                autoConnect: true,
                forceNew: true,
                query: {
                    'x-token': token
                }
            } )

           setSocket(socketTemp)
        }, [serverPath, token])

    const desconectarSocket = useCallback(
        () => {
            socket?.disconnect()
        }, [socket])

    useEffect(() => {
        setOnline( socket?.connected );
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('lista-usuarios', (usuarios) => {
            dispatch(UsuariosCargados(usuarios))
        })
    }, [ socket, dispatch ])

    useEffect(() => {
        socket?.on('lista-notificaciones', (notificaciones) => {
            dispatch(NotificacionesCargadas(notificaciones))

            dispatch(BorrarNotificaciones())
        })
    }, [ socket, dispatch])

    useEffect(() => {
        socket?.on('read-count-miniserie', (serie) => {
            dispatch(updateSerie(serie))
        })
    }, [ socket, dispatch])

    useEffect(() => {
        socket?.on('Deleted-Notifications-count', (notification) => {
            
            if (notification !== null) {
                dispatch(StartUpdateNotificationUser(notification))
            }
        })
    }, [ socket, dispatch])

    useEffect(() => {
        socket?.on('notifications-Show', (notification) => {

            if (notification?.subtitle === 'Transmitiendo reunión de Zoom') {
                dispatch(startGetZoom())
            } else if (notification?.subtitle === 'Nueva MiniSerie agregada') {
                dispatch(startGetMiniSeries())
            } else if (notification?.subtitle === 'Nuevo Bosquejo agregado') {
                dispatch(startGetBosquejos())
            } else if (notification?.subtitle === 'Nueva Cápsula agregada') {
                dispatch(startGetCapsules())
            } else if (notification?.subtitle === 'Nueva Peticion agregada') {
                dispatch(startGetPetitions())
            } else if (notification?.subtitle === 'Nuevo Evento agregado') {
                dispatch(startGetEventos())
            } else if (notification?.subtitle === 'Nuevo video de youtube agregado') {
                dispatch(startGetYoutube())
            } else if (notification?.subtitle === 'Nueva Palabra del Día agregada') {
                dispatch(startGetVideoWordOfTheDay())
            }

            dispatch(startGetNotificationsUser())
            
            dispatch(NotificationPublicAdmin(notification))
        })
    }, [ socket, dispatch])
    
    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}
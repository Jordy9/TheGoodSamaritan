import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hiddeMessage, respondMessage } from '../../action/message'
import perfil1 from '../../heroes/User.png'
import moment from 'moment'

export const IncomingMessage = ({msg}) => {

    const dispatch = useDispatch()

    const {image} = useSelector(state => state.cht)

    const {chatActivo, usuarios, mensajes} = useSelector(state => state.cht)

    const {messageOutGoing} = useSelector(state => state.mg)

    const user = usuarios?.filter(usuarios => usuarios.id === chatActivo)

    const [markMessage, setMarkMessage] = useState(false)
    
    const [isHidde, setIsHidde] = useState(false)

    const isMessage = mensajes?.filter(m => m?._id === msg?.respond?._id && m?.hiddeMessageTo === msg?.respond?.hiddeMessageTo)

    useEffect(() => {
        const lol = document?.getElementById(messageOutGoing)
        if (lol) {
            lol?.scrollIntoView({block: "center", behavior: "smooth"})
            setMarkMessage(true)
        }
        setTimeout(() => {
            setMarkMessage(false)
        }, 1500);

    }, [messageOutGoing, dispatch])

    const hiddeMessageById = (id) => {
        dispatch(hiddeMessage(id))
        setIsHidde(true)
      }
    
  return (
    <div hidden = {isHidde} className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="p-4 d-flex flex-row align-items-center">
                <div style={{width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden'}}>
                    {
                        (image)
                            ?
                        <img src={image} alt="sunil" style={{objectFit: 'cover'}} />
                            :
                        <img src={perfil1} alt="sunil" />
                    }
                </div>

                <div className='p-3 mx-1' style={{backgroundColor: '#FFFFFF6C', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', maxWidth: '80%'}}>

                    {
                    (msg?.respond)
                        ?
                    <div style={{padding: (markMessage && msg?._id === messageOutGoing) && '10px'}}>
                        <p className='p-3 d-flex flex-column' style={{backgroundColor: '#FFFFFF6C', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', color: 'CaptionText', fontSize: '14px', wordWrap: 'break-word'}}>
                        <span className='d-flex justify-content-end' style={{fontSize: '12px', textDecoration: 'underline', color: 'CaptionText'}}><strong>Respondiste a {user[0].name}</strong></span>
                        {(isMessage?.length !== 0) ? msg?.respond?.message : 'Este mensaje se ha eliminado'}</p> <br />
                        <span id={`${msg?._id}`} style={{wordWrap: 'break-word'}} className='mx-3'>{msg.message}</span>
                    </div>
                        :
                    (msg?.message?.includes('https://'))
                        ?
                    (msg?.message?.includes('.jpg') || msg?.message?.includes('.png') || msg?.message?.includes('.jpeg') || msg?.message?.includes('.svg'))
                        ?
                        <div style={{padding: (markMessage && msg?._id === messageOutGoing) && '10px'}}>
                            <img src = {msg?.message} className = 'img-fluid image-round' style = {{width: '100%', height: '150px', objectFit: 'cover'}} alt="" /> 
                            <span className='mx-3' id={`${msg?._id}`} style={{textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word', padding: (markMessage && msg?._id === messageOutGoing) && '10px'}}>{msg.message}</span>
                        </div>

                        :
                        <div style={{padding: (markMessage && msg?._id === messageOutGoing) && '10px'}}>
                            <iframe className='image-round' title='link' style={{cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden'}} src = {msg?.message}></iframe>
                            <span className='mx-3' id={`${msg?._id}`} style={{textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word', padding: (markMessage && msg?._id === messageOutGoing) && '10px'}} onClick={() => window.open(`${msg?.message}`)}>{msg.message}</span>
                        </div>
                        :
                    <span id={`${msg?._id}`} style={{wordWrap: 'break-word', padding: (markMessage && msg?._id === messageOutGoing) && '10px'}}>{msg.message}</span>
                    }
                
                </div>

                <span style={{fontSize: '10px'}} className='mx-2'>{moment(msg?.createdAt)?.format('h:mm a')}</span>
                <DropdownButton
                    title = {<i className="bi bi-chevron-down"></i>}
                    align={'end'}
                    variant="outline-secondary"
                    id="input-group-dropdown-2"
                    >
                    <Dropdown.Item style={{color: 'whitesmoke'}} onClick = {() => dispatch(respondMessage(msg))} className = 'nav-link'>Responder</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item style={{color: 'whitesmoke'}} onClick = {() => hiddeMessageById(msg?._id)} className = 'nav-link'>Eliminar para mi</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    </div>
  )
}

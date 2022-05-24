import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMessage, scrollMessageClear, scrollMessageOutGoing } from '../../action/message'
import moment from 'moment'

export const OutgoingMessage = ({msg}) => {

  const dispatch = useDispatch()

  const {chatActivo, usuarios, mensajes} = useSelector(state => state.cht)
  
  const isMessage = mensajes?.filter(m => m?._id === msg?.respond?._id && m?.hiddeMessageTo === msg?.respond?.hiddeMessageTo)

  const user = usuarios?.filter(usuarios => usuarios.id === chatActivo)

  const scrollRef = useRef(null)
    
  const redirectTo = () => {
    if (isMessage?.length !== 0) {
      dispatch(scrollMessageOutGoing(scrollRef?.current?.id))
    }
  }

  const [isHidde, setIsHidde] = useState(false)

  const deleteMessageById = (id) => {
    dispatch(deleteMessage(id))
    setIsHidde(true)
  }

  const {messageOutGoing} = useSelector(state => state.mg)

  useEffect(() => {
    if (messageOutGoing === scrollRef?.current?.id) {
      setTimeout(() => {
        dispatch(scrollMessageClear())
      }, 1600);
    }
  }, [dispatch, messageOutGoing])
  
  return (
    <div hidden = {isHidde} className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="p-4 image-round d-flex flex-row align-items-center  justify-content-end" style={{backgroundColor: '#181818'}}>
              <DropdownButton
                  title = {<i className="bi bi-chevron-down"></i>}
                  align={'end'}
                  variant="outline-secondary"
                  id="input-group-dropdown-2"
                  >
                  {/* <Dropdown.Item style={{color: 'whitesmoke'}} onClick = {() => dispatch(respondMessage(msg))} className = 'nav-link'>Responder</Dropdown.Item> */}
                  <Dropdown.Item style={{color: 'whitesmoke'}} onClick = {() => deleteMessageById(msg?._id)} className = 'nav-link'>Eliminar para todos</Dropdown.Item>
              </DropdownButton>
              <span style={{fontSize: '10px'}} className='mx-2'>{moment(msg?.createdAt)?.format('h:mm a')}</span>
              <div className='p-3 mx-1' style={{backgroundColor: '#0d6efd', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', maxWidth: '80%'}}>

                {
                  (msg?.respond)
                    ?
                  <>
                    <p onClick={redirectTo} className='p-3 d-flex flex-column' style={{backgroundColor: '#FFFFFF6C', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', color: 'CaptionText', fontSize: '14px', wordWrap: 'break-word', cursor: 'pointer'}}>
                    <span ref={scrollRef} id = {`${msg?.respond._id}`} className='d-flex justify-content-end' style={{fontSize: '12px', textDecoration: 'underline', color: 'CaptionText'}}><strong>Respondiste a {user[0].name}</strong></span>
                    {(isMessage?.length !== 0) ? msg?.respond?.message : 'Este mensaje se ha eliminado'}</p> <br />
                    <span style={{wordWrap: 'break-word'}} className='mx-3'>{msg.message}</span>
                  </>
                    :
                  (msg?.message?.includes('https://'))
                    ?
                  (msg?.message?.includes('.jpg') || msg?.message?.includes('.png') || msg?.message?.includes('.jpeg') || msg?.message?.includes('.svg'))
                    ?
                    <>
                      <img src = {msg?.message} className = 'img-fluid image-round' style = {{width: '100%', height: '150px', objectFit: 'cover'}} alt="" />  
                      <span className='mx-3' style={{textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word'}} onClick={() => window.open(`${msg?.message}`)}>{msg.message}</span>
                    </>
                    :
                  <>
                    <iframe className='image-round' title='link' style={{cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden'}} src = {msg?.message}></iframe>
                    <span className='mx-3' style={{textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word'}} onClick={() => window.open(`${msg?.message}`)}>{msg.message}</span>
                  </>
                    :
                  <span style={{wordWrap: 'break-word'}}>{msg?.message}</span>
                }

              </div>
            </div>
        </div>
    </div>
  )
}

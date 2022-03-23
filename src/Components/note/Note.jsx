import React, { useState } from 'react'
import { ListNotes } from './ListNotes'
import { NoteForm } from './NoteForm'

export const Note = () => {

    const [show, setShow] = useState(false)

  return (
    <>
        <div className="modal fade" id="exampleModalNota" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            (!show)
                                ?
                            <NoteForm setShow = {setShow} />
                                :
                            <ListNotes setShow = {setShow} />
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

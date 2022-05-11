import React from 'react'
import { useSelector } from 'react-redux'
import { SearchComponent } from './SearchComponent'
import './Bible.css'
import { BibleComponent } from './BibleComponent'
import { Note } from '../note/Note'

export const Bible = () => {

    const {search} = useSelector(state => state.vs)

  return (
    <div>
        <h1>Biblia</h1>
        <i data-bs-toggle="modal" data-bs-target="#exampleModalNota" className="fab bi bi-journal-bookmark-fill"></i>
        <div className = 'shadow p-3 mt-2 bg-dark image-round text-white'>
            {
                (!search)
                    ?
                <BibleComponent />
                    :
                <SearchComponent />
            }
        </div>
        <Note />
    </div>
  )
}

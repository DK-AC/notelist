import React, {useState} from 'react'
import './App.css'
import {ReturnComponentType} from './types'
import {NotesList} from './components/notelist/NotesList'
import {Header} from './components/header/Header'
import {Search} from './components/search/Search'

const dataNotes: NotesType = [
  {id: '1', title: 'first'},
  {id: '2', title: 'second'},
  {id: '3', title: 'third'},
  {id: '4', title: 'fourth'},
]

export type NoteType = {id: string; title: string}

export type NotesType = NoteType[]

export const App = (): ReturnComponentType => {
  const [notes, setNotes] = useState<NotesType>(dataNotes)

  const handleRemoveNoteClick = (id: string): void => {
    setNotes(notes.filter(note => id !== note.id))
  }
  const handleUpdateNoteTitleChange = (id: string, title: string): void => {
    setNotes(notes.map(note => (id === note.id ? {...note, title} : note)))
  }

  return (
    <div className="container">
      <Header />
      <Search />
      <NotesList
        notes={notes}
        onRemoveNoteClick={handleRemoveNoteClick}
        onUpdateNoteTitleChange={handleUpdateNoteTitleChange}
      />
    </div>
  )
}

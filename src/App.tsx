import React, {FC, useState} from 'react'
import './App.css'
import {NotesList} from './components/notelist/NotesList'
import {Header} from './components/header/Header'
import {Search} from './components/search/Search'
import {Value} from './enum/value'
import {data, NoteType} from './dataBase'

export const App: FC = () => {
  const [notes, setNotes] = useState(data.notes)
  const [search, setSearch] = useState<string>(Value.EmptyString)

  const handleRemoveNoteClick = (id: string): void => {
    setNotes(notes.filter(note => id !== note.id))
  }
  const handleUpdateNoteTitleChange = (id: string, title: string): void => {
    setNotes(notes.map(note => (id === note.id ? {...note, title} : note)))
  }
  const handleCreateNoteClick = (note: NoteType): void => {
    setNotes([...notes, note])
  }
  const filteredNotes = notes.filter(
    note => note.tags.filter(tag => tag.toLowerCase().includes(search))[0],
  )

  return (
    <div className="container">
      <Header />
      <Search onSearchChange={setSearch} />
      <NotesList
        data={filteredNotes}
        onRemoveNoteClick={handleRemoveNoteClick}
        onUpdateNoteTitleChange={handleUpdateNoteTitleChange}
        onCreateNoteClick={handleCreateNoteClick}
      />
    </div>
  )
}

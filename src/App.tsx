import React, {FC, useState} from 'react'
import './app.scss'
import {Value} from './enum/value'
import {data, NoteType, TagsType} from './dataBase'
import {Header} from './components/header'
import {Search} from './components/search'
import {NotesList} from './components/notelist'
import {v1} from 'uuid'

export const App: FC = () => {
  const [notes, setNotes] = useState<NoteType[]>(data.notes)
  const [search, setSearch] = useState<string>(Value.EmptyString)

  const handleRemoveNoteClick = (id: string): void => {
    setNotes(notes.filter(note => id !== note.id))
  }
  const handleUpdateNoteTitleChange = (id: string, title: string): void => {
    const addHashTagToNote = title
      .split(' ')
      .filter(str => str.includes('#'))
      .join('')

    setNotes(
      notes.map(note =>
        id === note.id
          ? {...note, title, tags: [...note.tags, {id: v1(), title: addHashTagToNote}]}
          : note,
      ),
    )
  }
  const handleCreateNoteClick = (note: NoteType): void => {
    setNotes([...notes, note])
  }
  const handleRemoveTagClick = (tags: TagsType, tagId: string): void => {
    setNotes(
      notes.map(note => ({
        ...note,
        tags: note.tags.filter(tag => tag.id !== tagId),
      })),
    )
  }
  const filteredNotes = notes.filter(
    note =>
      note.tags.filter(tag => tag.title.toLowerCase().includes(search.toLowerCase()))[0],
  )

  return (
    <div className="container">
      <Header title="Notes" />
      <Search onSearchChange={setSearch} />
      <NotesList
        data={filteredNotes}
        onRemoveNoteClick={handleRemoveNoteClick}
        onUpdateNoteTitleChange={handleUpdateNoteTitleChange}
        onCreateNoteClick={handleCreateNoteClick}
        onRemoveTagClick={handleRemoveTagClick}
      />
    </div>
  )
}

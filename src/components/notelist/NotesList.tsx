import React, {FC} from 'react'
import {Note} from '../note/Note'
import './notelist.css'
import {NotesType} from '../../App'

type PropsType = {
  notes: NotesType
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
}

export const NotesList: FC<PropsType> = ({
  notes,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
}) => {
  const mapNotes = notes.map(notes => {
    return (
      <Note
        key={notes.id}
        {...notes}
        onRemoveNoteClick={onRemoveNoteClick}
        onUpdateNoteTitleChange={onUpdateNoteTitleChange}
      />
    )
  })

  return <div className="notes-list">{mapNotes}</div>
}

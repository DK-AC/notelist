/* eslint-disable */

import React, {FC} from 'react'
import {Note} from '../note/Note'
import './notelist.css'
import {CreateNote} from '../createNote/CreateNote'
import {NoteType} from '../../dataBase'

type PropsType = {
  data: NoteType[]
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
  onCreateNoteClick: (note: NoteType) => void
}

export const NotesList: FC<PropsType> = ({
  data,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
  onCreateNoteClick,
}) => {
  const mapNotes = data.map((note: NoteType) => {
    return (
      <Note
        key={note.id}
        {...note}
        onRemoveNoteClick={onRemoveNoteClick}
        onUpdateNoteTitleChange={onUpdateNoteTitleChange}
      />
    )
  })

  return (
    <div className="notes-list">
      {mapNotes}
      <CreateNote onCreateNoteClick={onCreateNoteClick} />
    </div>
  )
}

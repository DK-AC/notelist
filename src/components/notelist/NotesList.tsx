/* eslint-disable */

import React, {FC} from 'react'
import {Note} from '../note/Note'
import './notelist.css'
import {CreateNote} from '../createNote/CreateNote'
import {NoteType, TagsType} from '../../dataBase'

type PropsType = {
  data: NoteType[]
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
  onCreateNoteClick: (note: NoteType) => void
  onRemoveTagClick: (note: TagsType, itemId: string) => void
}

export const NotesList: FC<PropsType> = ({
  data,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
  onCreateNoteClick,
  onRemoveTagClick,
}) => {
  const mapNotes = data.map((note: NoteType, index) => {
    return (
      <Note
        key={note.id}
        {...note}
        onRemoveNoteClick={onRemoveNoteClick}
        onUpdateNoteTitleChange={onUpdateNoteTitleChange}
        onRemoveTagClick={onRemoveTagClick}
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

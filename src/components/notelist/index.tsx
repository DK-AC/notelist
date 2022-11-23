import React, {FC} from 'react'
import {Note} from '../note'
import './notelist.scss'
import {NoteType, TagsType} from '../../dataBase'
import {CreateNote} from '../createNote'

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
  const mapNotes = data.map((note: NoteType) => {
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

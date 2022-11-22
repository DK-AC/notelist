import React, {FC} from 'react'
import './note.css'
import {EditableSpan} from '../editableSpan/EditableSpan'

type PropsType = {
  id: string
  title: string
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
}

export const Note: FC<PropsType> = ({
  id,
  title,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
}) => {
  const handleUpdateNoteTitleChange = (title: string): void => {
    onUpdateNoteTitleChange(id, title)
  }

  return (
    <div className="note">
      <EditableSpan title={title} onUpdateNoteTitleChange={handleUpdateNoteTitleChange} />
      <div className="note-footer">
        <span className="note-footer-item">
          <b>#hash</b>
        </span>
        <button type="button" onClick={() => onRemoveNoteClick(id)}>
          delete
        </button>
      </div>
    </div>
  )
}

import React, {FC} from 'react'
import './note.css'
import {EditableSpan} from '../editableSpan/EditableSpan'
import {CustomButton} from '../customButton/CustomButton'
import {TagsType} from '../../dataBase'
import {v1} from 'uuid'

type PropsType = {
  id: string
  title: string
  tags: TagsType
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
}

export const Note: FC<PropsType> = ({
  id,
  title,
  tags,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
}) => {
  const handleRemoveNoteClick = (): void => {
    onRemoveNoteClick(id)
  }
  const handleUpdateNoteTitleChange = (title: string): void => {
    onUpdateNoteTitleChange(id, title)
  }

  const mapTags = tags.map(tag => {
    return <b key={v1()}>{tag} </b>
  })

  return (
    <div className="note">
      <EditableSpan title={title} onUpdateNoteTitleChange={handleUpdateNoteTitleChange} />
      <div className="note-footer">
        <span className="note-footer-item">{mapTags}</span>
        <CustomButton title="delete" callback={handleRemoveNoteClick} />
      </div>
    </div>
  )
}

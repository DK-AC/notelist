import React, {FC} from 'react'
import './note.scss'
import {EditableSpan} from '../editableSpan'
import {ReusableButton} from '../reusableButton'
import {TagsType} from '../../dataBase'

type PropsType = {
  id: string
  title: string
  tags: TagsType
  onRemoveNoteClick: (id: string) => void
  onUpdateNoteTitleChange: (id: string, title: string) => void
  onRemoveTagClick: (obj: TagsType, itemId: string) => void
}

export const Note: FC<PropsType> = ({
  id,
  title,
  tags,
  onRemoveNoteClick,
  onUpdateNoteTitleChange,
  onRemoveTagClick,
}) => {
  const handleRemoveNoteClick = (): void => {
    onRemoveNoteClick(id)
  }
  const handleUpdateNoteTitleChange = (title: string): void => {
    onUpdateNoteTitleChange(id, title)
  }
  const mapTags = tags.map(tag => {
    const handleRemoveTagClick = (): void => {
      onRemoveTagClick(tags, tag.id)
    }

    return (
      <b key={tag.id}>
        {tag.title}
        {tag.title.includes('#') && (
          <ReusableButton title="x" callback={handleRemoveTagClick} />
        )}
      </b>
    )
  })

  return (
    <div className="note">
      <EditableSpan title={title} onUpdateNoteTitleChange={handleUpdateNoteTitleChange} />
      <div className="note-footer">
        <span>{mapTags}</span>
        <ReusableButton title="delete" callback={handleRemoveNoteClick} />
      </div>
    </div>
  )
}

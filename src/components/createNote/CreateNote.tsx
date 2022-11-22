import React, {ChangeEvent, FC, useState} from 'react'
import './createNote.css'
import {CustomButton} from '../customButton/CustomButton'
import {Value} from '../../enum/value'

type PropsType = {
  onCreateNoteClick: (title: string) => void
}

export const CreateNote: FC<PropsType> = ({onCreateNoteClick}) => {
  const [title, setTitle] = useState<string>(Value.EmptyString)

  const handleUpdateTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.currentTarget.value)
  }
  const handleCreateNodeClick = (): void => {
    if (title.trim() !== Value.EmptyString) {
      onCreateNoteClick(title)
      setTitle(Value.EmptyString)
    }
  }

  return (
    <div className="create-note">
      <textarea
        value={title}
        onChange={handleUpdateTitleChange}
        cols={10}
        rows={6}
        placeholder="Type to add a note..."
        maxLength={150}
      />
      <div className="create-note-footer">
        <CustomButton title="save" callback={handleCreateNodeClick} />
      </div>
    </div>
  )
}

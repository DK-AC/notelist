import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react'
import './editableSpan.css'
import {Value} from '../../enum/value'

type PropsType = {
  title: string
  onUpdateNoteTitleChange: (title: string) => void
}

export const EditableSpan: FC<PropsType> = ({title, onUpdateNoteTitleChange}) => {
  const [value, setValue] = useState(title)
  const [isEditMode, setIsEditMode] = useState(false)

  const handleUpdateTitleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.currentTarget.value)
  }
  const setIsActiveEditMode = (): void => {
    if (value.trim() !== Value.EmptyString) {
      setIsEditMode(prevState => !prevState)
      onUpdateNoteTitleChange(value)
    }
  }
  const handleSetIsEditModeKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter') {
      setIsActiveEditMode()
    }
  }

  return (
    <div className="test">
      {isEditMode ? (
        <textarea
          className="textarea"
          value={value}
          onChange={handleUpdateTitleChange}
          onBlur={setIsActiveEditMode}
          onKeyDown={handleSetIsEditModeKeyDown}
          cols={10}
          rows={6}
          maxLength={200}
        />
      ) : (
        <span onDoubleClick={setIsActiveEditMode}>{title}</span>
      )}
    </div>
  )
}

import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react'
import './editableSpan.css'

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
    setIsEditMode(prevState => !prevState)
    onUpdateNoteTitleChange(value)
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
        />
      ) : (
        <span onDoubleClick={setIsActiveEditMode}>{title}</span>
      )}
    </div>
  )
}

import React, {ChangeEvent, FC, memo, useState} from 'react'
import './editableSpan.scss'
import {Value} from '../../enum/value'

type PropsType = {
  title: string
  onUpdateNoteTitleChange: (title: string) => void
}

export const EditableSpan: FC<PropsType> = memo(({title, onUpdateNoteTitleChange}) => {
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

  return (
    <div className="text-holder">
      {isEditMode ? (
        <textarea
          className="text-holder__area"
          value={value}
          onChange={handleUpdateTitleChange}
          onBlur={setIsActiveEditMode}
          cols={10}
          rows={6}
          maxLength={150}
        />
      ) : (
        <span onDoubleClick={setIsActiveEditMode}>{title}</span>
      )}
    </div>
  )
})

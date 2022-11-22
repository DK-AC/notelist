import React, {FC} from 'react'
import './createNote.css'

export const CreateNote: FC = () => {
  return (
    <div className="create-note">
      <textarea cols={10} rows={6} placeholder="Type...." maxLength={150} />
      <div className="create-note-footer">
        <button type="button" className="create-note-save">
          Save
        </button>
      </div>
    </div>
  )
}

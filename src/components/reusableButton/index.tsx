import React, {FC} from 'react'
import './reusableButton.scss'

type PropsType = {
  title: string
  callback: () => void
}

export const ReusableButton: FC<PropsType> = ({callback, title}) => {
  return (
    <button className="button" type="button" onClick={callback}>
      {title}
    </button>
  )
}

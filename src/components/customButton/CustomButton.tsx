import React, {FC} from 'react'
import './customButton.css'

type PropsType = {
  title: string
  callback: () => void
}

export const CustomButton: FC<PropsType> = ({callback, title}) => {
  return (
    <button className="button" type="button" onClick={callback}>
      {title}
    </button>
  )
}

import React, {FC} from 'react'
import './header.scss'

type PropsType = {
  title: string
}

export const Header: FC<PropsType> = ({title}) => {
  return <h1 className="header">{title}</h1>
}

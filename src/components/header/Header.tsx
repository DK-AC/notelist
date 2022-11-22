import React from 'react'
import {ReturnComponentType} from '../../types'
import './header.css'

export const Header = (): ReturnComponentType => {
  return (
    <div>
      <h1 className="header">Notes</h1>
    </div>
  )
}

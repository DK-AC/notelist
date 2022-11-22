import React from 'react'
import {ReturnComponentType} from '../../types'
import './search.css'

export const Search = (): ReturnComponentType => {
  return (
    <div>
      <input className="search" type="text" placeholder="type to search..." />
    </div>
  )
}

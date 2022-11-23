import React, {ChangeEvent, FC} from 'react'
import './search.scss'

type PropsType = {
  onSearchChange: (title: string) => void
}

export const Search: FC<PropsType> = ({onSearchChange}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(e.currentTarget.value)
  }

  return (
    <input
      placeholder="Type to search..."
      className="search-tags"
      type="search"
      onChange={handleChange}
    />
  )
}

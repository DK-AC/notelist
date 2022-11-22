import {v1} from 'uuid'

export type NoteType = {id: string; title: string; tags: TagsType}
export type TagsType = string[]

export type NotesType = {
  notes: NoteType[]
}

export const data: NotesType = {
  notes: [
    {
      id: v1(),
      title: 'Car',
      tags: ['#cars', '#carsofinstagram'],
    },
    {
      id: v1(),
      title: 'soccer',
      tags: ['#soccer', '#football', '#sport'],
    },
    {
      id: v1(),
      title: 'gaming',
      tags: ['#gamer', '#playstation'],
    },
  ],
}

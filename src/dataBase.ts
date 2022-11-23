import {v1} from 'uuid'

export type NoteType = {id: string; title: string; tags: TagsType}
export type TagsType = TagType[]
export type TagType = {id: string; title: string}

export type NotesType = {
  notes: NoteType[]
}

export const data: NotesType = {
  notes: [
    {
      id: v1(),
      title: 'Car',
      tags: [
        {id: v1(), title: '#cars'},
        {id: v1(), title: '#carsofinstagram'},
      ],
    },
    {
      id: v1(),
      title: 'soccer',
      tags: [
        {id: v1(), title: '#football'},
        {id: v1(), title: '#sport'},
        {id: v1(), title: '#soccer'},
      ],
    },
    {
      id: v1(),
      title: 'gaming',
      tags: [
        {id: v1(), title: '#gamer'},
        {id: v1(), title: '#playstation'},
      ],
    },
  ],
}

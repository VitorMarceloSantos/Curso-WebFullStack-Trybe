import { createContext } from 'react'

type contextType = {
  name: string,
  modifyName: (newName: string) => void
}
export const Context = createContext<contextType>({name:'Default', modifyName: () => []})
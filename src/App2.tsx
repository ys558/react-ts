import React, { useState, FC } from 'react'

// interface AppProps {
//   sendSearchQuery?(): void
// }

// react里面， ts的interface可以用type的形式代替，两者可以互换：
type AppProps = {
  sendSearchQuery?(): void
}

export const App2: FC <AppProps> = ({ sendSearchQuery = () => undefined }: AppProps) => {
  const [searchValue, setSearchValue] = useState<string>()
  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const searchValue = event.target.value
  }

  const search = () => {
    sendSearchQuery()
  }
  return <div>
    <input value={searchValue} type="text" onChange={onSearchInput} name="search"/>
    <button onClick={search}>Search</button>
  </div>
}
import React from 'react'
import { TexField } from './TexField'

/**
 * 本项目旨在介绍以下三个方面的tsx写法:
 * 1. props
 * 2. hooks
 * 3. render props
 */

const App: React.FC = () => {
  return (
    <div>
      <TexField 
        text='hello' person={{firstName:'', lastName: ''}}
        handleChange={e => console.log(e.target.value)} 
      />
    </div>
  )
}

export default App

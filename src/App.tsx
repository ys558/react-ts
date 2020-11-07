import React from 'react'
import { TexField } from './TexField'
import { Counter } from './Counter'

/**
 * 本项目旨在介绍以下4个方面的tsx写法:
 * 1. props
 * 2. hooks
 * 3. render props
 * 4. generics in react
 */

const App: React.FC = () => {
  return (
    <div>
      <TexField 
        text='hello' person={{firstName:'', lastName: ''}}
        handleChange={e => console.log(e.target.value)} 
      />
      <Counter>
        {({count, setCount})=> <div>
          { count }
          <button onClick={() => setCount( count + 1 )}>+</button>
        </div>}
      </Counter>
    </div>
  )
}

export default App

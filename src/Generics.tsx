import React, { useState } from 'react'

interface Props {
  name: string
}
const Helloworld: React.FC<Props> = ({name}) => {
  // overwrite generics
  const [state] = useState<{fullname: string | null}>({ fullname: '' })
  return <div>hello {name}</div>
}


interface FormProps <T> {
  values: T
  children: (value: T) => JSX.Element 
}
const Form = <T extends {}> ({values, children}: FormProps<T>) => children(values)


const Generics : React.FC = () => {
  return <div>
    {/* overwrite generics: <{ firstName: string | null }> */}
    <Form <{ firstName: string | null }> values={{ firstName: 'Bob' }}>{(values)=> <div>{values.firstName}</div>}</Form>
  </div>
}


export default Generics
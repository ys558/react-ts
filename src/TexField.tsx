import React from 'react'

interface Props {
  text: string;
}

const TexField: React.FC <Props> /* <{text: string}> */  = () => {
  return (
    <div>
      <input/>
    </div>
  )
}

export default TexField

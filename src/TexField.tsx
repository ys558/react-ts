import React, {useState} from 'react'

/**
 *  
 * 2 传入参数的三种方法: 
    2.1 规定类型<number | null | undefined | string>, '或'符号为单线:
    2.2 解构: <{ text: string }>
    2.3 interface
 */
interface Person {
  firstName: string;
  lastName: string;
}

// 从父组件App.js传来的props定义:
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
}

// 可以直接解构, 或者定义interface
const TexField: React.FC <Props> /* <{text: string}> */  = ({ person, text, i }) => {
  
  // 2 传入参数的三种方法: 
  // 2.1 规定类型<number | null | undefined | string>, '或'符号为单线:
  // 2.2 解构: <{ text: string }>
  // 2.3 interface
  const [count, setCount] = useState <{ text: string }> /*  <number | null | undefined | string> */ ({ text: 'hello' })
  setCount( { text } /* 'hello' */ )

  return (
    <div>
      <input/>
    </div>
  )
}

export default TexField

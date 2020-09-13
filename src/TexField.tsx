import React, {useState, useRef} from 'react'

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
  // fn:
  fn?: (bob: string) => string;
  // obj
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  text: string;
}

// 可以直接解构, 或者定义interface
export const TexField: React.FC <Props> /* <{text: string}> */  = ({ handleChange }: Props) => {
  // 2 传入参数的三种方法: 
  // 2.1 规定类型<number | null | undefined | string>, '或'符号为单线:
  // 2.2 直接解构: <{ text: string }>
  // 2.3 interface
  const [count, setCount] = useState <TextNode> /* <{ text: string }> */ /*  <number | null | undefined | string> */ ({ text: 'hello' })
  const inputRef = useRef <HTMLInputElement> (null)
  const divRef = useRef <HTMLDivElement> (null)

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}


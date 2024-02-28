import { FC } from "react"
import styled from "styled-components";

const Input: FC<{
  type: string;
  value: string;
  setData: (value: string) => void;
  placeholder: string;
}> = ({type, value, setData, placeholder}) => {
  return <Inputs placeholder={placeholder} type={type} value={value} onChange={(e) => setData(e.target.value)} />
}

export default Input

const Inputs = styled.input`
  width: 385px;
  height: 51px;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 0px 10px black;
  &:active {
    border: 2px solid red;
  }
  padding-left: 15px;
  color: #403b3b;
  font-size: 18px;
`
import { FC, ReactNode } from "react";
import styled from "styled-components";
export const Button: FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({children, onClick}) => {
  return <Buttons onClick={onClick}>{children}</Buttons>
}

const Buttons = styled.button`
  width: 400px;
  height: 51px;
  border-radius: 3px;
  background-color: #26b326;
  color: #fff;
  font-size: 17px;
  border: none;
  
`
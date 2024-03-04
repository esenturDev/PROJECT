import { FC, ReactNode } from "react";
import styled from "styled-components";
export const Button: FC<{
	children: ReactNode;
	onClick: () => void;
}> = ({ children, onClick }) => {
	return <Buttons onClick={onClick}>{children}</Buttons>;
};

const Buttons = styled.button`
	cursor: pointer;
	width: 258px;
	height: 31px;
	border-radius: 3px;
	background-color: blue;
	color: #fff;
	font-size: 14px;
	border: none;
`;

import { FC } from "react";
import styled from "styled-components";

const Input: FC<{
	type: string;
	value: string;
	setData: (value: string) => void;
	placeholder: string;
}> = ({ type, value, setData, placeholder }) => {
	return (
		<Inputs
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={(e) => setData(e.target.value)}
		/>
	);
};

export default Input;

const Inputs = styled.input`
	width: 240px;
	height: 29px;
	border-radius: 3px;
	border: none;
	box-shadow: 0px 0px 2px black;
	&:hover {
		border: 2px solid #a3a3fd93;
		background-color: #a3a3fd52;
		/* outline: blue; */
	}
	/* &:active {
		border: none;
	} */
	padding-left: 15px;
	color: #403b3b;
	font-size: 12px;
`;

import { FC, ReactNode } from "react";
import styled from "styled-components";

const Modal2: FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<ModalContainer>
			<ModalContent>{children}</ModalContent>
		</ModalContainer>
	);
};

export default Modal2;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(191, 188, 188, 0.27);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background: #ccc;
	box-sizing: 2px 2px 2px 5px #fff;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(195, 190, 190, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
	border-radius: 15px;
`;

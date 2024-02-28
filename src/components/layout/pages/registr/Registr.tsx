import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../../../store/tools/LoginSlice";
import styled from "styled-components";
import { useAppSelector } from "../../../../store/store";
import Input from "../../../Ul/input/Input";
import { Button } from "../../../Ul/button/Button";
import { useNavigate } from "react-router-dom";
const Registr = () => {
	const dispatch = useDispatch();
	const loginResults = useAppSelector((state) => state.loginSliceResult);
	console.log(loginResults);

	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState<string>("");
	const [userPassword, setUserPassword] = useState<string>("");
	const [userImg, setUserImg] = useState<string>("");
	const addPostLogin = () => {
		const newData = {
			email: userLogin,
			password: userPassword,
      img: userImg,
		};
		dispatch(postLogin(newData));
		navigate("/login");
	};
	return (
		<LoginContainer>
			<div className="container">
				<Content>
					<DivForms>
						<H1>Вход в Trello</H1>
						<InputsAndButton>
							<Input
								type="email"
								value={userLogin}
								setData={setUserLogin}
								placeholder="Укажите адрес электронной почты"
							/>
							<Input
								type="password"
								value={userPassword}
								setData={setUserPassword}
								placeholder="Введите пароль"
							/>
							<Input
								type="url"
								value={userImg}
								setData={setUserImg}
								placeholder="Photos"
							/>
							<Button onClick={addPostLogin}>Продолжить</Button>
						</InputsAndButton>
						<Texts>
							<P>Не удается войти?</P>
							<P>Зарегистрировать аккаунть</P>
						</Texts>
					</DivForms>
					<DivContent>
						<P>Политика конфиденциальности</P>
						<P>Условия использования</P>
					</DivContent>
				</Content>
			</div>
		</LoginContainer>
	);
};

export default Registr;

const LoginContainer = styled.div`
	margin-top: 8rem;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

const DivForms = styled.div`
	width: 450px;
	height: auto;
	border-radius: 12px;
	box-shadow: 0 0 10px black;
`;

const H1 = styled.h1`
	text-align: center;
	font-size: 2.5rem;
	font-weight: 700;
`;

const InputsAndButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

const Texts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0rem;
	padding-bottom: 2rem;
`;

const P = styled.p`
	color: #0d0ddb;
	font-size: 1.1rem;
	font-weight: 600;
`;
const DivContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.8rem;
`;

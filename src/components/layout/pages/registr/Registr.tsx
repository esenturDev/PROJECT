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
		if (userLogin === "" && userImg === "" && userPassword === "") {
			alert("Заполните Пустые поли");
		} else {
			dispatch(postLogin(newData));
			navigate("/login");
		}
	};
	function handleNavigateLogin() {
		navigate("/login");
	}
	return (
		<LoginContainer>
			<div className="container">
				<Content>
					<DivForms>
						<DivContentTrello>
							<img
								style={{ width: "130px", height: "auto" }}
								src="data:image/svg+xml,%3csvg%20viewBox='0%200%2094%2032'%20height='32'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20focusable='false'%20aria-hidden='true'%3e%3cdefs%3e%3clinearGradient%20id='uid3'%20x1='9.33821'%20y1='23.6824'%20x2='9.33821'%20y2='5.00599'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230052CC'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%232684FF'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='var(--ds-text,%20%23172B4D)'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M68.749%2023.7902C66.249%2023.7902%2064.6742%2022.5776%2064.6742%2019.7573V5H68.5155V19.2304C68.5155%2020.0477%2069.0574%2020.3381%2069.7131%2020.3381C69.9021%2020.3421%2070.0911%2020.3331%2070.2789%2020.3112V23.6315C69.7788%2023.7552%2069.2639%2023.8086%2068.749%2023.7902ZM38.7121%209.98505V6.37431H26.0297V9.98505H30.3051V23.6825H34.4308V9.98505H38.7121ZM40.1498%2023.6825H43.9641V16.6227C43.9641%2014.464%2045.2276%2013.8053%2047.9072%2014.0149V10.027C45.8443%209.89522%2044.6856%2010.973%2043.9641%2012.7904V10.2096H40.1498V23.6825ZM72.6901%2019.7573C72.6901%2022.5776%2074.2619%2023.7902%2076.7619%2023.7902C77.2787%2023.809%2077.7957%2023.7556%2078.2978%2023.6315V20.3112C78.109%2020.333%2077.9189%2020.342%2077.7289%2020.3381C77.0732%2020.3381%2076.5313%2020.0477%2076.5313%2019.2304V5H72.6901V19.7573ZM80.1444%2016.9402C80.1444%2012.7786%2082.5396%209.93129%2086.6653%209.93129C90.791%209.93129%2093.1353%2012.7845%2093.1353%2016.9402C93.1353%2021.0958%2090.764%2024%2086.6653%2024C82.5665%2024%2080.1444%2021.0749%2080.1444%2016.9402ZM83.8809%2016.9402C83.8809%2018.9701%2084.7312%2020.5749%2086.6653%2020.5749C88.5994%2020.5749%2089.3988%2018.9701%2089.3988%2016.9402C89.3988%2014.9103%2088.5724%2013.3474%2086.6653%2013.3474C84.7581%2013.3474%2083.8959%2014.9103%2083.8959%2016.9402H83.8809ZM56.2777%2018.3621C55.2023%2018.3538%2054.1281%2018.2909%2053.0592%2018.1734C53.4124%2020.0986%2054.8256%2020.7692%2056.8795%2020.7692C58.4004%2020.7692%2059.8854%2020.3501%2061.1998%2019.9309V23.1734C59.7762%2023.7133%2058.2642%2023.9824%2056.7417%2023.9668C51.6131%2023.9668%2049.3436%2021.4009%2049.3436%2017.0806C49.3436%2012.934%2051.9723%209.94%2056.0801%209.94C59.1309%209.94%2061.6668%2012.0058%2061.6668%2014.7513C61.6668%2017.5776%2059.1968%2018.3621%2056.2777%2018.3621ZM57.9513%2014.6166C57.9513%2013.6136%2057.0831%2012.8801%2056.0022%2012.8801L55.9992%2012.8711C55.4963%2012.8789%2055.0046%2013.0206%2054.5746%2013.2816C54.1447%2013.5426%2053.7921%2013.9135%2053.5532%2014.3561C53.2546%2014.9118%2053.0751%2015.5236%2053.0262%2016.1525C53.686%2016.2551%2054.3525%2016.3081%2055.0202%2016.3112C56.5861%2016.3112%2057.9513%2015.91%2057.9513%2014.6166Z'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.4579%205H2.21854C1.63014%205%201.06585%205.23374%200.649794%205.64979C0.233738%206.06585%200%206.63014%200%207.21854V21.4669C0%2022.0553%200.233738%2022.6196%200.649794%2023.0356C1.06585%2023.4517%201.63014%2023.6854%202.21854%2023.6854H16.4579C17.0463%2023.6854%2017.6106%2023.4517%2018.0266%2023.0356C18.4427%2022.6196%2018.6764%2022.0553%2018.6764%2021.4669V7.22452C18.6772%206.93268%2018.6204%206.64354%2018.5093%206.37369C18.3981%206.10383%2018.2348%205.85855%2018.0287%205.65191C17.8227%205.44527%2017.5778%205.28131%2017.3083%205.16945C17.0387%205.05758%2016.7497%205%2016.4579%205V5ZM8.04481%2018.4729C8.04481%2018.6685%207.96731%2018.8561%207.82927%2018.9947C7.69123%2019.1333%207.50391%2019.2116%207.30829%2019.2124H4.18558C3.98969%2019.2116%203.80205%2019.1334%203.66353%2018.9949C3.52502%2018.8564%203.44685%2018.6688%203.44607%2018.4729V9.19157C3.44685%208.99568%203.52502%208.80804%203.66353%208.66952C3.80205%208.53101%203.98969%208.45284%204.18558%208.45205H7.30829C7.50391%208.45285%207.69123%208.53111%207.82927%208.66971C7.96731%208.80831%208.04481%208.99595%208.04481%209.19157V18.4729ZM15.2304%2014.2185C15.2296%2014.4143%2015.1514%2014.602%2015.0129%2014.7405C14.8744%2014.879%2014.6867%2014.9572%2014.4908%2014.958H11.3681C11.1725%2014.9572%2010.9852%2014.8789%2010.8471%2014.7403C10.7091%2014.6017%2010.6316%2014.4141%2010.6316%2014.2185V9.19157C10.6316%208.99595%2010.7091%208.80831%2010.8471%208.66971C10.9852%208.53111%2011.1725%208.45285%2011.3681%208.45205H14.4908C14.6867%208.45284%2014.8744%208.53101%2015.0129%208.66952C15.1514%208.80804%2015.2296%208.99568%2015.2304%209.19157V14.2185Z'%20fill='url(%23uid3)'%3e%3c/path%3e%3c/svg%3e"
								alt="Trello photo login"
							/>
							<p>Вступление для продолжения</p>
							<p>Регистрация</p>
						</DivContentTrello>
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
							<Button onClick={addPostLogin}>Зарегистрироваться</Button>
							<Button onClick={handleNavigateLogin}>Войти</Button>
							<ButtonLogin>
								<img
									style={{ width: "20px", height: "auto" }}
									src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23EA4335'%20d='M24%209.5c3.54%200%206.71%201.22%209.21%203.6l6.85-6.85C35.9%202.38%2030.47%200%2024%200%2014.62%200%206.51%205.38%202.56%2013.22l7.98%206.19C12.43%2013.72%2017.74%209.5%2024%209.5z'/%3e%3cpath%20fill='%234285F4'%20d='M46.98%2024.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58%202.96-2.26%205.48-4.78%207.18l7.73%206c4.51-4.18%207.09-10.36%207.09-17.65z'/%3e%3cpath%20fill='%23FBBC05'%20d='M10.53%2028.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92%2016.46%200%2020.12%200%2024c0%203.88.92%207.54%202.56%2010.78l7.97-6.19z'/%3e%3cpath%20fill='%2334A853'%20d='M24%2048c6.48%200%2011.93-2.13%2015.89-5.81l-7.73-6c-2.15%201.45-4.92%202.3-8.16%202.3-6.26%200-11.57-4.22-13.47-9.91l-7.98%206.19C6.51%2042.62%2014.62%2048%2024%2048z'/%3e%3cpath%20fill='none'%20d='M0%200h48v48H0z'/%3e%3c/svg%3e"
									alt="logo google"
								/>
								<span>Google</span>
							</ButtonLogin>
							<ButtonLogin>
								<img
									style={{ width: "20px", height: "auto" }}
									src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='21'%3e%3cpath%20fill='%23f25022'%20d='M1%201h9v9H1z'/%3e%3cpath%20fill='%2300a4ef'%20d='M1%2011h9v9H1z'/%3e%3cpath%20fill='%237fba00'%20d='M11%201h9v9h-9z'/%3e%3cpath%20fill='%23ffb900'%20d='M11%2011h9v9h-9z'/%3e%3c/svg%3e"
									alt="logo google"
								/>
								<span>Microsoft</span>
							</ButtonLogin>
							<ButtonLogin>
								<img
									style={{ width: "20px", height: "auto" }}
									src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.498%209.667a3.86%203.86%200%200%201%201.838-3.238%203.951%203.951%200%200%200-3.113-1.683c-1.31-.138-2.58.784-3.247.784-.68%200-1.708-.77-2.814-.748A4.146%204.146%200%200%200%202.673%206.91c-1.508%202.611-.383%206.45%201.062%208.56.723%201.034%201.567%202.189%202.673%202.148%201.082-.045%201.486-.69%202.792-.69%201.293%200%201.672.69%202.8.664%201.161-.02%201.893-1.039%202.59-2.082a8.55%208.55%200%200%200%201.184-2.412%203.73%203.73%200%200%201-2.276-3.431ZM11.367%203.358a3.8%203.8%200%200%200%20.87-2.723A3.866%203.866%200%200%200%209.734%201.93a3.616%203.616%200%200%200-.892%202.621c.98.01%201.91-.43%202.524-1.193Z'%20fill='%23000'/%3e%3c/svg%3e"
									alt="logo google"
								/>
								<span>Apple</span>
							</ButtonLogin>
							<ButtonLogin>
								<img
									style={{ width: "20px", height: "auto" }}
									src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='70%2070%20130%20130'%3e%3cstyle%3e.st0{fill:%23e01e5a}.st1{fill:%2336c5f0}.st2{fill:%232eb67d}.st3{fill:%23ecb22e}%3c/style%3e%3cpath%20class='st0'%20d='M99.4%20151.2c0%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9h12.9v12.9zM105.9%20151.2c0-7.1%205.8-12.9%2012.9-12.9s12.9%205.8%2012.9%2012.9v32.3c0%207.1-5.8%2012.9-12.9%2012.9s-12.9-5.8-12.9-12.9v-32.3z'/%3e%3cpath%20class='st1'%20d='M118.8%2099.4c-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9s12.9%205.8%2012.9%2012.9v12.9h-12.9zM118.8%20105.9c7.1%200%2012.9%205.8%2012.9%2012.9s-5.8%2012.9-12.9%2012.9H86.5c-7.1%200-12.9-5.8-12.9-12.9s5.8-12.9%2012.9-12.9h32.3z'/%3e%3cpath%20class='st2'%20d='M170.6%20118.8c0-7.1%205.8-12.9%2012.9-12.9%207.1%200%2012.9%205.8%2012.9%2012.9s-5.8%2012.9-12.9%2012.9h-12.9v-12.9zM164.1%20118.8c0%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9V86.5c0-7.1%205.8-12.9%2012.9-12.9%207.1%200%2012.9%205.8%2012.9%2012.9v32.3z'/%3e%3cpath%20class='st3'%20d='M151.2%20170.6c7.1%200%2012.9%205.8%2012.9%2012.9%200%207.1-5.8%2012.9-12.9%2012.9-7.1%200-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2%20164.1c-7.1%200-12.9-5.8-12.9-12.9%200-7.1%205.8-12.9%2012.9-12.9h32.3c7.1%200%2012.9%205.8%2012.9%2012.9%200%207.1-5.8%2012.9-12.9%2012.9h-32.3z'/%3e%3c/svg%3e"
									alt="logo google"
								/>
								<span>Slack</span>
							</ButtonLogin>
							<div></div>
							<img
								src="https://project-trello.vercel.app/assets/atlassia-95GRkScz.svg"
								alt="logo"
							/>
						</InputsAndButton>
					</DivForms>
				</Content>
			</div>
		</LoginContainer>
	);
};

export default Registr;

const LoginContainer = styled.div`
	margin-top: 3rem;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 7px;
`;

const ButtonLogin = styled.button`
	cursor: pointer;
	width: 258px;
	height: 31px;
	border-radius: 3px;
	background-color: #fff;
	color: black;
	font-size: 14px;
	display: flex;
	align-items: center;
	box-shadow: 0px 0px 2px black;
	justify-content: center;
	gap: 10px;
	border: none;
`;

const DivContentTrello = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.1rem;
	flex-direction: column;
	align-items: center;
`;

const DivForms = styled.div`
	width: 345px;
	height: 600px;
	border-radius: 12px;
	padding-block: 1.5rem;
	box-shadow: 0 0 1px black;
`;

const InputsAndButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	padding-bottom: 1rem;
	div {
		margin-block: 9px;
		width: 258px;
		height: 0px;
		border: 1px solid #c8bfbf;
	}
`;

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../../store/store";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getResultsBekents, getUserProfile } from "../../../store/tools/LoginSlice";
import { createPortal } from "react-dom";
import Modal from "../../modal/Modal";
import {
	deleteCards,
	deleteProfileCards,
	getUserProfile,
} from "../../../store/tools/LoginSlice";
import Modal2 from "../../modal2/Modal2";
import { getPhotosResult } from "../../../store/tools/PhotosSlice";
// import { Button } from "../../Ul/button/Button";
import logo from "../../../assets/trello-line (1).svg";

import logo2 from "../../../assets/trello-line (2).svg";
export const Header = () => {
	const dispatch = useDispatch();
	const mapBekentsIsImg = useAppSelector(
		(state) => state.loginSliceResult.data
	);
	const photosArray = useAppSelector((state) => state.PhotosIsBekents.data);
	console.log(photosArray);

	const navigate = useNavigate();
	const [modal, setModal] = useState<boolean>(false);
	const [modalPhotos, setModalPhotos] = useState<boolean>(false);
	const [isPhotos, setIsPhotos] = useState<boolean>(false);
	const removeLocalIsBekents = (id: number) => {
		console.log(id);

		localStorage.removeItem("isAuth");

		dispatch(deleteCards(id));
		navigate("/registr");
	};
	function deleteProfile(id: number) {
		dispatch(deleteProfileCards(id));
	}
	console.log(mapBekentsIsImg);
	useEffect(() => {
		dispatch(getUserProfile());
		dispatch(getPhotosResult());
	}, []);
	return (
		<>
			<HeaderContainer>
				<Container className="container">
					<Content>
						<ContentDiv1>
							<Imgage src={logo2} alt="logo" />
							<H3>Trello</H3>
							<P>Рабочие пространства</P>
							<P>Недавние</P>
							<P>В избранном</P>
							<P>Шаблоны</P>
							<Button onClick={() => setModalPhotos(true)}>Создать</Button>
						</ContentDiv1>
						<ContentDiv2>
							<Input type="text" />
							{mapBekentsIsImg.map((item, index) => (
								<>
									<Img
										onClick={() => setModal(!modal)}
										src={item.img}
										key={index}
										alt={item.email}
									/>
									{/* <button onClick={() => deleteProfile(item._id)}>delete</button> */}
								</>
							))}
						</ContentDiv2>
						{modal ? (
							<DivModal>
								<h3 className="h3">УЧЕТНАЯ ЗАПИСЬ</h3>
								<div className="profileUser">
									{mapBekentsIsImg.map((item, index) => (
										<>
											<Img
												onClick={() => setModal(true)}
												src={item.img}
												key={index}
												alt={item.email}
											/>
											<div>
												<h2>{item.email}</h2>
												<h3>{item.email}</h3>
											</div>
										</>
									))}
								</div>
								<h2>Переключение аккаунтов</h2>
								<h2>Управление аккаунтов</h2>
								<div className="divBorder"></div>
								<p className="trello">TRELLO</p>
								<p>Прифиль и доступ</p>
								<p>Действия</p>
								<p>Карточки</p>
								<p>Настройки</p>
								<p>Выбор темы</p>
								<div className="divBorder"></div>
								<p>Помощь</p>
								<p>Горячие клавиши</p>
								<div className="divBorder"></div>
								<button onClick={() => removeLocalIsBekents(1)}>Выйти</button>
							</DivModal>
						) : (
							""
						)}
					</Content>
				</Container>
			</HeaderContainer>
			{/* {modal &&
				createPortal(
					<Modal>
						<div></div>
						<div>
							<Button onClick={() => removeLocalIsBekents(1)}>Exit</Button>
							<Button onClick={() => setModal(false)}>Modal Noo</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)} */}
			{modalPhotos &&
				createPortal(
					<Modal2>
						{isPhotos ? (
							<>
								<ContainerPhotos>
									<p style={{ textAlign: "center" }}>Создать доску</p>
									<p>фон</p>
									<ModalDiv>
										{photosArray?.map((item, index) => (
											<>
												<Link
													style={{
														display: "flex",
														justifyContent: "space-around",
														alignItems: "center",
													}}
													to={`/${item._id}`}
													onClick={() => setIsPhotos(false)}>
													<img key={index} src={item.logo} alt="logo" />
												</Link>
											</>
										))}
										<Button onClick={() => setModalPhotos(false)}>
											Modal Noo
										</Button>
									</ModalDiv>
								</ContainerPhotos>
							</>
						) : (
							<ModalContent>
								<h3 onClick={() => setIsPhotos(true)}>Создайте доску</h3>
							</ModalContent>
						)}
					</Modal2>,
					document.getElementById("modal")
				)}
		</>
	);
};

const HeaderContainer = styled.header`
	/* display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column; */
	transition: all 0.7s ease;
	position: fixed;
	left: 0;
	top: 0;
	backdrop-filter: blur(8px);
	width: 100%;
	height: 60px;
	/* display: flex;
	align-items: center;
	justify-content: space-between; */
	padding-left: 10px;
	padding-right: 10px;
	margin-top: -8px;
	/* display: flex;
	align-items: center;
	justify-content: space-between; */
	background-color: #242323;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1425px;
	margin-inline: auto;
	padding-inline: 30px;
`;

const DivModal = styled.div`
	position: absolute;
	top: 3.7rem;
	right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 1px;
	width: 13.5rem;
	/* height: 21rem; */
	height: auto;
	padding-inline: 0.4rem;
	padding-block: 0.3rem;
	border-radius: 12px;
	background-color: #343131;
	box-shadow: 0px 0px 4px #2a2929;
	.h3 {
		color: #cdc8c8;
		font-size: 10px;
		font-weight: 500;
		padding-block: 3px;
		padding-left: 10px;
		padding-block: 10px;
		&:hover {
			transition: all 0.2s ease;
			background-color: #5d5757;
			border-radius: 15px;
		}
	}
	.profileUser {
		display: flex;
		justify-content: space-evenly;
		align-items: start;
		div {
			display: flex;
			flex-direction: column;
			gap: -10px;
			h2 {
				font-size: 10px;
				font-weight: 650;
				padding-block: 1px;
				padding-left: 10px;
				color: #cdc8c8;
				&:hover {
					transition: all 0.2s ease;
					background-color: #5d5757;
					border-radius: 15px;
				}
			}
			h3 {
				font-size: 7px;
				font-weight: 450;
				padding-block: 1px;
				padding-left: 10px;
				color: #cdc8c8;
				&:hover {
					transition: all 0.2s ease;
					background-color: #5d5757;
					border-radius: 15px;
				}
			}
		}
	}
	h2 {
		color: #cdc8c8;
		font-size: 14px;
		font-weight: 700;
		padding-block: 1px;
		padding-left: 10px;
		&:hover {
			transition: all 0.2s ease;
			background-color: #5d5757;
			border-radius: 15px;
		}
	}
	.divBorder {
		border: 0.3px solid #d2c8c8;
		width: 10.7rem;
		/* height: 0.1px; */
	}
	.trello {
		font-size: 7px;
		font-weight: 750;
		color: #cdc8c8;
		/* padding-block: 3px; */
		padding-left: 10px;
	}
	p {
		font-size: 12.8px;
		font-weight: 700;
		padding-block: 1px;
		padding-left: 10px;
		color: #cdc8c8;
		&:hover {
			transition: all 0.2s ease;
			background-color: #5d5757;
			border-radius: 15px;
		}
	}
	button {
		margin-top: 3px;
		color: #cdc8c8;
		padding-block: 10px;
		background-color: transparent;
		border: none;
		padding-left: 15px;
		padding-right: 10px;
		text-align: start;
		&:hover {
			transition: all 0.2s ease;
			background-color: #5d5757;
			border-radius: 12px;
		}
	}
`;

const Input = styled.input`
	width: 185px;
	height: 30px;
	padding-left: 10px;

	border-radius: 6px;
	background-color: #656060;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
`;

const ContentDiv1 = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: end;
	gap: 1rem;
	padding-left: 1.5rem;
`;

const H3 = styled.h3`
	color: #f7f3f3;
	font-size: 1rem;
	font-weight: 700;
`;

const P = styled.p`
	color: #2c2a2a;
	font-size: 0%.8;
	font-weight: 550;
	color: #f8e8e8;
`;

const Imgage = styled.img`
	width: 20px;
	height: auto;
	position: relative;
	z-index: 100;
	background-color: transparent;
`;

const Button = styled.button`
	width: 4.6rem;
	height: 2rem;
	background-color: #6f6ff5;
	border-radius: 7px;
	border: none;
	color: #0a0a0a;
	font-size: 0.7rem;
	font-weight: 500;
`;

const ContentDiv2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	gap: 1rem;
	padding-right: 1.5rem;
`;

const Img = styled.img`
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 50%;
`;

const ModalDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;

	img {
		width: 3rem;
		height: auto;
		border-radius: 8px;
	}
`;

const ContainerPhotos = styled.div`
	display: flex;
	flex-direction: column;
`;

const ModalContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	h3 {
		color: black;
		font-size: 22px;
		font-weight: 600;
	}
`;

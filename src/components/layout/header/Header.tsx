import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../../store/store";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getResultsBekents, getUserProfile } from "../../../store/tools/LoginSlice";
import { createPortal } from "react-dom";
import Modal from "../../modal/Modal";
import { deleteCards, getUserProfile } from "../../../store/tools/LoginSlice";
import Modal2 from "../../modal2/Modal2";
import { getPhotosResult } from "../../../store/tools/PhotosSlice";
// import { Button } from "../../Ul/button/Button";

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
	console.log(mapBekentsIsImg);
	useEffect(() => {
		dispatch(getUserProfile());
		dispatch(getPhotosResult());
	}, []);
	return (
		<>
			<HeaderContainer>
				<div className="container">
					<Content>
						<ContentDiv1>
							<H3>Trello</H3>
							<P>Рабочие пространства</P>
							<P>Недавние</P>
							<P>В избранном</P>
							<P>Шаблоны</P>
							<Button onClick={() => setModalPhotos(true)}>Создать</Button>
						</ContentDiv1>
						<ContentDiv2>
							{mapBekentsIsImg.map((item, index) => (
								<>
									<Img
										onClick={() => setModal(true)}
										src={item.img}
										key={index}
										alt={item.email}
									/>
								</>
							))}
						</ContentDiv2>
					</Content>
				</div>
			</HeaderContainer>
			{modal &&
				createPortal(
					<Modal>
						<div></div>
						<div>
							<Button onClick={() => removeLocalIsBekents(1)}>Exit</Button>
							<Button onClick={() => setModal(false)}>Modal Noo</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
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
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ContentDiv1 = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 0.7rem;
`;

const H3 = styled.h3`
	color: #2c2a2a;
	font-size: 1.4rem;
	font-weight: 700;
`;

const P = styled.p`
	color: #2c2a2a;
	font-size: 1.1rem;
	font-weight: 550;
`;

const Button = styled.button`
	width: 7.6rem;
	height: 2.6rem;
	background-color: #1616f8;
	color: #0a0a0a;
	font-size: 1rem;
	font-weight: 500;
`;

const ContentDiv2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

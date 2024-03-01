import {
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
	useEffect,
	useState,
} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../../../store/store";
import logo from "../../../../assets/contract-up-down-line.svg";
import {
	deleteCards,
	getBekents,
	patchCard,
	patchCommit,
	postBekents,
	putEditResult,
} from "../../../../store/tools/ColumnSlice";
import { createPortal } from "react-dom";
import { CardsModal } from "../../../CardsModal/CardsModal";
import logoprofile from "../../../../assets/trello-line (2).svg";
import { getUserProfile } from "../../../../store/tools/LoginSlice";
import logo2 from "../../../../assets/bard-line.svg";
import logo3 from "../../../../assets/settings-2-line.svg";
import logo4 from "../../../../assets/table-2.svg";
import logo5 from "../../../../assets/calendar-todo-fill.svg";
import photoPen from "../../../../assets/edit-line.svg";
import logo6 from "../../../../assets/pencil-ruler-2-fill.svg";
import ModalCardsDiv from "../../../ModalCardsDiv/ModalCardsDiv";
import logo7 from "../../../../assets/arrow-up-down-line.svg";
import logo8 from "../../../../assets/inbox-unarchive-line.svg";

const Todo_List = () => {
	const cards = useAppSelector((state) => state.columnSliceResults.data);
	const [isResult, setIsResult] = useState<number | boolean>(true);
	const [editText, setEditText] = useState<boolean | number | null>(null);
	const [commitModal, setCommitModal] = useState<string>("");
	const [openModal, setOpenModal] = useState<boolean | number>(false);
	const [editInputValue, setEditInputValue] = useState<string>("");
	const [modalDiv, setModalDiv] = useState<boolean | number>(false);

	function editInputs(id: number) {
		setEditText(id);
	}

	const dispatch = useDispatch();
	const [cardsInputValue, setCardsInputValue] = useState<string>("");

	const [isCardsBoolean, setIsCardsBoolean] = useState<boolean>(true);

	const CardsResults = useAppSelector((state) => state.columnSliceResults.data);
	const [modalInputValue, setModalInputValue] = useState<string>("");
	const userProfile = useAppSelector((state) => state.loginSliceResult.data);
	console.log(CardsResults);

	const [columnsInputValue, setColumnsInputValue] = useState<string>("");
	const postCards = () => {
		const newData = {
			title: cardsInputValue,
			column: [],
		};
		dispatch(postBekents(newData));
	};
	const [arrayPhotos, setArrayPhotos] = useState([]);
	function handleCardsDiv(id: number) {
		setModalDiv(id);
	}
	const patchResult = (_id: number, item: [], title: string) => {
		console.log(item.column);
		console.log("text");

		const newData = {
			title,
			column: [
				...item.column,
				// item.column,
				{
					_id: Math.random(),
					name: columnsInputValue,
					commit: commitModal,
				},
			],
		};
		dispatch(patchCard({ newData, _id }));
	};

	const [addButton, setAddButton] = useState<boolean | number | string>("");

	const deleteCardsBek = (id: number) => {
		dispatch(deleteCards(id));
	};

	const patchSave = (_id: number, column: [], id: number, commit) => {
		console.log(_id, column, id);

		const resultCards = column.map((item) => {
			if (item._id !== id) {
				return item;
			}
			return {
				name: editInputValue,
				commit,
				_id: id,
			};
		});
		const newData = {
			column: resultCards,
		};
		dispatch(putEditResult({ newData, _id }));
		setEditText(false);
	};

	function openModalResultItemId(id: number) {
		setOpenModal(id);
	}

	const patchCommitMap = (_id: number) => {
		console.log(_id);

		const newData = {
			commit: commitModal,
		};
		dispatch(patchCommit({ newData, _id }));
	};

	useEffect(() => {
		dispatch(getUserProfile());
		dispatch(getBekents());
	}, []);
	const handleIsResults = (_id: number) => {
		console.log(_id);

		setIsResult(_id);
	};
	const handleResult = () => {
		setIsResult(false);
		console.log("text");
	};
	console.log(arrayPhotos);
	// console.log(photosBek);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any

	return (
		<>
			<ResultProject>
				<>
					<Container>
						<Content>
							<NavBar>
								<DivPhotos>
									<img
										src="https://st-1.akipress.org/cdn-st-0/qd3/S/md-356.jpg"
										alt=""
									/>
									<h3>Peaksoft House</h3>
								</DivPhotos>
								<>
									<DivContents>
										<NavContent1>
											<img src={logoprofile} alt="photos profile" />
											<span>Доски</span>
										</NavContent1>
										<NavContent1>
											<img src={logo2} alt="photos " />
											<span>участники</span>
										</NavContent1>
										<NavContent1>
											<img src={logo3} alt="photos " />
											<p>
												Настройки рабочего <br />
												пространства
											</p>
										</NavContent1>
										<DivTexts>
											<p>Режимы просмотра рабочего прост...</p>
										</DivTexts>
										<NavContent1>
											<img src={logo4} alt="tible" />
											<p>таблица</p>
										</NavContent1>
										<NavContent1>
											<img src={logo5} alt="tible" />
											<p>календарь</p>
										</NavContent1>
										<NavContent1>
											<p>Мои доски</p>
										</NavContent1>
										<NavContent1>
											<div></div>
										</NavContent1>
									</DivContents>
								</>
							</NavBar>
							<ContentResult>
								<NavDiv>
									<NavDivContent>
										<h2>PROJECT</h2>
										<p>○</p>
										<p>Для рабочего пространства</p>
										<button>По доске</button>
									</NavDivContent>
									<NavDivContent2>
										<button>Улучшения</button>
										<button>Автоматизация</button>
										<button>фильтры</button>
										{userProfile.map((item, index) => (
											<>
												<img src={item.img} key={index} alt={item.email} />
											</>
										))}
										<ButtonFull>Поделиться</ButtonFull>
									</NavDivContent2>
								</NavDiv>
								<ContentsDiv>
									<CardsResultsBekents>
										<>
											{isCardsBoolean ? (
												<Button onClick={() => setIsCardsBoolean(false)}>
													Добавить список
												</Button>
											) : (
												<FormResult>
													<Input
														type="text"
														placeholder="Ввести заголовок списка"
														value={cardsInputValue}
														onChange={(e) => setCardsInputValue(e.target.value)}
													/>
													<div className="div">
														<button
															onClick={() => {
																postCards();
																// setIsCardsBoolean(false);
															}}>
															Добавить список
														</button>
														<img
															onClick={() => setIsCardsBoolean(true)}
															src={logo}
															alt="logo incon"
														/>
													</div>
													<></>
												</FormResult>
											)}
											{cards &&
												cards.map((item, index) => (
													<MapCadrs key={index}>
														<p>{item.title}</p>
														{/* <button onClick={() => deleteCardsBek(item._id)}>
															delete
														</button> */}
														<DivItemCards>
															{item.column &&
																item.column.map(
																	(itemIndex: {
																		_id: Key | null | undefined;
																		name:
																			| string
																			| number
																			| boolean
																			| ReactElement<
																					any,
																					string | JSXElementConstructor<any>
																			  >
																			| Iterable<ReactNode>
																			| ReactPortal
																			| null
																			| undefined;
																	}) => (
																		<div
																			onClick={() => {
																				// openModalResultItemId(itemIndex._id);
																				setModalInputValue(itemIndex.name);
																			}}
																			key={itemIndex._id}>
																			{editText !== itemIndex._id ? (
																				<>
																					<p
																						onClick={() =>
																							openModalResultItemId(
																								itemIndex._id
																							)
																						}>
																						{itemIndex.name}
																					</p>
																					<p>{itemIndex.commit}</p>
																					<img
																						onClick={() =>
																							editInputs(itemIndex._id)
																						}
																						src={photoPen}
																						alt="pen"
																					/>
																					<img
																						onClick={
																							() =>
																								handleCardsDiv(itemIndex._id)
																							// setModalDiv(false)
																						}
																						src={logo6}
																						alt="logo6 Pen"
																					/>
																					{modalDiv === itemIndex._id
																						? createPortal(
																								<ModalCardsDiv>
																									<ModalDiv>
																										<>
																											<button>
																												<img
																													src={logo7}
																													alt="logo7"
																												/>
																												<span>
																													Изменить метки
																												</span>
																											</button>
																										</>
																										<>
																											<button
																												onClick={() =>
																													deleteCardsBek(
																														item._id
																													)
																												}>
																												<img
																													src={logo8}
																													alt="logo8"
																												/>
																												<span>
																													Архивировать
																												</span>
																											</button>
																										</>
																									</ModalDiv>
																								</ModalCardsDiv>,
																								document.getElementById("modal")
																						  )
																						: ""}
																				</>
																			) : (
																				<div className="EditDiv">
																					<input
																						type="text"
																						value={editInputValue}
																						onChange={(e) =>
																							setEditInputValue(e.target.value)
																						}
																					/>
																					<div className="divButtons">
																						<button
																							onClick={() =>
																								setEditText(false)
																							}>
																							Cancel
																						</button>
																						<button
																							onClick={() =>
																								patchSave(
																									item._id,
																									item.column,
																									itemIndex._id,
																									itemIndex.commit
																									// item.title
																								)
																							}>
																							Same
																						</button>
																					</div>
																				</div>
																			)}
																		</div>
																	)
																)}
														</DivItemCards>
														{isResult !== item._id ? (
															<button
																onClick={() => {
																	handleIsResults(item._id);
																}}>
																Добавить карточку
															</button>
														) : (
															<>
																<input
																	type="text"
																	value={columnsInputValue}
																	onChange={(e) =>
																		setColumnsInputValue(e.target.value)
																	}
																	placeholder="Ввести заголовок для этой карточки"
																/>
																<div className="buttonsDiv">
																	<button
																		className="button"
																		onClick={() => {
																			patchResult(item._id, item, item.title);
																			setIsResult(true);
																		}}>
																		Добавить карточку
																	</button>
																	<button
																		className="button"
																		onClick={() => handleResult()}>
																		inputNoo
																	</button>
																</div>
															</>
														)}
													</MapCadrs>
												))}
										</>
									</CardsResultsBekents>
								</ContentsDiv>
							</ContentResult>
						</Content>
					</Container>
				</>
			</ResultProject>
			{openModal &&
				createPortal(
					<CardsModal>
						<div>
							<h2>{modalInputValue}</h2>
							<label>Commit</label>
							<input
								type="text"
								value={commitModal}
								onChange={(e) => setCommitModal(e.target.value)}
							/>
							<button onClick={() => patchCommitMap(openModal)}>
								Сохранить
							</button>
						</div>
					</CardsModal>,
					document.getElementById("modal")
				)}
		</>
	);
};

export default Todo_List;

const Button = styled.button`
	padding-right: 3.2rem;
	padding-block: 0.9rem;
	padding-left: 1.1rem;
	border: none;
	border-radius: 4px;
	background-color: #e9e5eec5;
	color: black;
	border-radius: 7px;
	&:hover {
		transition: all 0.3s ease;
		background-color: #ffffffc6;
	}
`;

const ContentResult = styled.div`
	margin-right: 2rem;
`;

const ResultProject = styled.div``;

const MapCadrs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: black;
	width: 13rem;
	height: auto;
	border-radius: 7px;
	padding-block: 1.5px;
	padding-bottom: 9px;
	padding-inline: 10px;
	gap: 1rem;
	/* align-items: center; */
	p {
		text-align: start;
		color: #fff;
	}
	button {
		margin-top: 1.5rem;
		height: 5px;
		width: 25px;
		padding-right: 11rem;
		border-radius: 7px;
		padding-left: 2rem;
		color: #fff;
		background-color: #1d1a1a;
		font-size: 13px;
		border: none;
		&:hover {
			transition: all 0.3s ease;
			background-color: #686262;
		}
	}
	input {
		padding-top: 7px;
		padding-bottom: 35px;
		padding-left: 8px;
		padding-right: 25px;
		background-color: #2d2a2a;
		border: none;
		color: #efe3e3;
		margin-bottom: 10px;
	}
	.buttonsDiv {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 7px;
		.button {
			padding-inline: 3px;
			padding-block: 1.5px;
			background-color: #6666f6;
			color: black;
			border: none;
			border-radius: 5px;

			font-size: 12px;
			&:hover {
				transition: all 0.2s ease;
				background-color: #e3d9d9ad;
			}
		}
	}
`;

const FormResult = styled.div`
	display: flex;
	/* flex-direction: column; */
	flex-direction: column;
	background-color: black;
	align-items: center;
	padding-block: 0.6rem;
	position: relative;
	border-radius: 7px;
	width: 14rem;
	height: auto;
	gap: 0.6rem;
	div {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 0.5rem;
		button {
			padding-inline: 5px;
			padding-block: 2.5px;
			background-color: #6666f6;
			color: black;
			border: none;
			border-radius: 5px;

			font-size: 12px;
			&:hover {
				transition: all 0.2s ease;
				background-color: #e3d9d9ad;
			}
		}
	}
	img {
		width: 25px;
		height: 25px;
	}
`;

const DivItemCards = styled.div`
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
	gap: 9px;
	flex-direction: column;
	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10px;
		width: 12rem;
		padding-inline: 8px;
		height: 3rem;
		background-color: #2d2a2a;
		border-radius: 10px;
		&:hover {
			transition: all 0.3s ease;
			background-color: #474444;
		}
		p {
			font-size: 14px;
			font-weight: 600;
			color: #ccc;
		}
		button {
			padding-inline: 5px;
			padding-block: 2.5px;
			background-color: #6666f6;
			color: black;
			border: none;
			border-radius: 5px;

			font-size: 8px;
			&:hover {
				transition: all 0.2s ease;
				background-color: #e3d9d9ad;
			}
		}
		img {
			width: 18px;
			height: 18px;
			background-color: #a79f9f;
			border-radius: 20%;
		}
		.EditDiv {
			display: flex;
			flex-direction: column;

			input {
				width: 11rem;
				padding-left: 8px;
				height: 18px;
				border-radius: 7px;
				background-color: #474444;
				color: #a79f9f;
			}
			.divButtons {
				display: flex;
				/* justify-content: space-evenly; */
				align-items: end;
				gap: 7px;
				margin-top: -18px;
				button {
					padding-inline: 5px;
					padding-block: 2.5px;
					background-color: #6666f6;
					color: black;
					border: none;
					border-radius: 5px;

					font-size: 14px;
					&:hover {
						transition: all 0.2s ease;
						background-color: #e3d9d9ad;
					}
				}
			}
		}
	}
`;

const ModalDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 16px;
	button {
		padding-block: 12px;
		padding-inline: 16px;
		border-radius: 8px;
		border: none;
		img {
			width: 15px;
			height: auto;
		}
		span {
			color: #fff;
			font-size: 12px;
		}
	}
`;

const NavDivContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.6rem;
	padding-right: 18rem;
	h2 {
		font-size: 1rem;
		font-weight: 850;
		color: #fff;
	}
	p {
		color: #fff;
		font-size: 0.7rem;

		font-weight: 550;
	}
	button {
		background-color: #fff;
		color: black;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		border-radius: 6px;
		border: none;
	}
`;

const NavDivContent2 = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-right: 1rem;
	gap: 0.7rem;
	button {
		padding-block: 0.5rem;
		padding-inline: 1.1rem;
		border-radius: 6px;
		background-color: transparent;
		color: #fff;
		border: none;
		&:hover {
			transition: all 0.2s ease;
			background-color: #cbcbcb56;
		}
	}
	img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}
`;

const DivPhotos = styled.div`
	border-top: 1px solid #9a9595;
	border-bottom: 1px solid #9a9595;
	padding-block: 0.5rem;
	display: flex;
	flex-direction: column;
	margin-top: 2px;
	align-items: center;
	gap: 0.2rem;

	img {
		width: 2.8rem;
		height: auto;
		border-radius: 35%;
	}
	h3 {
		font-size: 17px;
		font-weight: 750;
		color: #cec4c4;
	}
`;

const NavContent1 = styled.div`
	display: flex;
	justify-content: start;
	gap: 10px;
	padding-left: 20px;
	align-items: center;
	img {
		width: 19px;
		height: 19px;
		background-color: #cec4c4;
	}
	span {
		color: #cec4c4;
		font-size: 14px;
	}
	p {
		color: #cec4c4;
		font-size: 14px;
	}
	div {
		width: 100px;
		height: 48px;
		border-radius: 7px;
		border: none;
		background-color: #7219aadd;
	}
`;

const DivTexts = styled.div`
	padding-left: 7px;
	p {
		color: #cec4c4;
		font-size: 14px;
	}
`;

const DivContents = styled.div`
	padding-block: 10px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 6px;
`;

const ContentsDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #7219aadd;
	padding-left: 4.9rem;
	width: 100%;
	height: 100vh;
	button {
		width: 120px;
		height: 45px;
	}
`;

const ButtonFull = styled.button`
	padding-block: 0.7rem;
	padding-inline: 1.3rem;
	color: black;
	background-color: #fff;
`;

const NavDiv = styled.nav`
	width: 100%;
	padding-block: 1px;
	background-color: #6d36b0dd;
	box-shadow: 0px 0px 5px purple;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 4.9rem;
`;

const NavBar = styled.nav`
	width: 15rem;

	height: 100vh;
	margin-left: -50px;

	background-color: #17111be9;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 5px;
`;

const Content = styled.div`
	display: flex;
	/* flex-direction: column; */
	align-items: start;
	justify-content: space-between;
`;

// const FormDiv = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	/* align-items: center; */
// 	background-color: black;
// 	align-items: center;
// 	padding-block: 0.6rem;
// 	position: relative;
// 	border-radius: 7px;
// 	width: 15rem;
// 	height: auto;
// 	gap: 0.6rem;
// 	/* position: absolute; */
// 	.div {
// 		display: flex;
// 		justify-content: space-evenly;
// 		align-items: start;
// 		gap: 1rem;
// 		padding-right: 16px;
// 		button {
// 			padding-inline: 10px;
// 			padding-block: 4.5px;
// 			background-color: #6666f6;
// 			color: black;
// 			border: none;
// 			border-radius: 5px;

// 			font-size: 12px;
// 			&:hover {
// 				transition: all 0.2s ease;
// 				background-color: #e3d9d9ad;
// 			}
// 		}
// 		img {
// 			width: 1.3rem;
// 			height: auto;
// 			position: relative;
// 			z-index: 100;
// 		}
// 	}
// `;

const CardsMapDiv = styled.div``;

const Container = styled.div`
	width: 100%;
	max-width: 1425px;
	margin-inline: auto;
	padding-inline: 0px;
`;

const Input = styled.input`
	width: 175px;
	height: 25px;
	border-radius: 4px;
	border: 2px solid #fff;
	background-color: #0000007d;
	font-size: 12px;
	color: #fff;
	border: 1px solid blue;
	&:active {
		border: 2px solid blue;
		outline: none;
	}
`;

const CardsResultsBekents = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row-reverse;
	gap: 0.8rem;
`;

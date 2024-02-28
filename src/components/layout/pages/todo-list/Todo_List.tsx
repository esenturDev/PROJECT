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
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../store/store";
// import { getPhotos } from "../../../../store/tools/PhotosSlice";
import axios from "axios";
import logo from "../../../../assets/contract-up-down-line.svg";
import {
	getBekents,
	patchCard,
	postBekents,
} from "../../../../store/tools/ColumnSlice";
// import { Button } from "../../../Ul/button/Button";

const Todo_List = () => {
	const { id } = useParams();
	const photosBek = useAppSelector((state) => state.PhotosIsBekents.data);
	const cards = useAppSelector((state) => state.columnSliceResults.data);
	const [isResult, setIsResult] = useState<number | boolean>(true);
	console.log(cards);

	// const todoCards = useAppSelector((state) => {
	// 	const columns = state.columnSliceResults.data[0].columns; // Получаем массив столбцов из первого элемента массива данных
	// 	if (columns) {
	// 		const columnKeys = columns.map((column) => Object.keys(column)); // Получаем ключи (названия) столбцов
	// 		return columnKeys;
	// 	}
	// 	return [columns];
	// });
	// console.log(todoCards);

	const dispatch = useDispatch();
	const [cardsInputValue, setCardsInputValue] = useState<string>("");
	const [isCardsBoolean, setIsCardsBoolean] = useState<boolean>(true);
	const CardsResults = useAppSelector((state) => state.columnSliceResults.data);
	const [columnsInputValue, setColumnsInputValue] = useState<string>("");
	const postCards = () => {
		const newData = {
			title: cardsInputValue,
		};

		dispatch(postBekents(newData));
	};
	const [arrayPhotos, setArrayPhotos] = useState([]);

	const url1 = `https://api.elchocrud.pro/api/v1/01d4ed96bc4043838c8418452e366a0c/photos_is_Bekents/${id}`;
	const getPhotos = async () => {
		try {
			const response = (await axios.get(url1)).data;
			setArrayPhotos([response]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPhotos();
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
	const patchResult = (id: number, columns: any) => {
		console.log(id);
		console.log("text");
		console.log(columns);

		const newData = {
			_id: Math.random(),
			name: columnsInputValue,
		};
		dispatch(patchCard( newData, id ));
	};

	return (
		<ResultProject>
			{arrayPhotos.map((item, index) => (
				<>
					<img src={item.logo} key={index} alt="logo" />
				</>
			))}
			<>
				<Content>
					{isCardsBoolean ? (
						<Button onClick={() => setIsCardsBoolean(false)}>
							Добавить список{" "}
						</Button>
					) : (
						<>
							<FormDiv>
								<Input
									type="text"
									placeholder="Ввести заголовок списка"
									value={cardsInputValue}
									onChange={(e) => setCardsInputValue(e.target.value)}
								/>
								<div className="divResult">
									<button
										onClick={() => {
											postCards();
											setIsCardsBoolean(true);
										}}>
										Добавить список
									</button>
									<img src={logo} alt="logo incon" />
								</div>
							</FormDiv>
						</>
					)}
					{cards?.map((item, index) => (
						<div key={index}>
							<p>{item.title}</p>
							{/* {item.columns} */}
							{/* {item.columns.map((column) => (
								<div key={column._id}>
									
									<p>{column.name}</p>
								</div>
							))} */}
							{/* {console.log(item.name)} */}
							{/* {item.columns.map((column, colIndex) => (
								<div key={colIndex}>
									<p>{column.name}</p>
								</div>
							))} */}
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
										onChange={(e) => setColumnsInputValue(e.target.value)}
									/>
									<button
										onClick={() => {
											patchResult(item._id, item.columns);
											setIsResult(true);
										}}>
										Добавить карточку
									</button>
									<button onClick={() => handleResult()}>inputNoo</button>
								</>
							)}
						</div>
					))}
				</Content>
			</>
		</ResultProject>
	);
};

export default Todo_List;

const Button = styled.button`
	width: 145px;
	height: 51px;
	border-radius: 4px;
	background-color: #7e7a7a;
	color: black;
`;

const ResultProject = styled.div`
	img {
		width: 100%;
		position: relative;
		z-index: -100;
		height: 100%;
		bottom: auto;
		bottom: 3.3rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 32rem;
`;

const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.6rem;
	/* position: absolute; */
	.divResult {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding-right: 3rem;
		gap: 1rem;
		button {
			width: 120px;
			height: 45px;
			background-color: #2424e3;
			color: black;
			font-size: 18px;
		}
		img {
			width: 1.3rem;
			height: auto;
			z-index: 100;
			position: relative;
			top: 0rem;
		}
	}
`;

const Input = styled.input`
	width: 200px;
	height: 40px;
	border-radius: 4px;
	padding-left: 10px;
	border: 1px solid blue;
	&:active {
		border: 2px solid blue;
		outline: none;
	}
`;

// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { useAppSelector } from "../../../../store/store";
// import axios from "axios";
// import logo from "../../../../assets/contract-up-down-line.svg";
// import {
// 	getBekents,
// 	patchCard,
// 	postBekents,
// } from "../../../../store/tools/ColumnSlice";

// const Todo_List = () => {
// 	const { id } = useParams();
// 	const cards = useAppSelector((state) => state.columnSliceResults.data);
// 	const [isResult, setIsResult] = useState<number | boolean>(true);
// 	const dispatch = useDispatch();
// 	const [cardsInputValue, setCardsInputValue] = useState<string>("");
// 	const [isCardsBoolean, setIsCardsBoolean] = useState<boolean>(true);
// 	const [columnsInputValue, setColumnsInputValue] = useState<string>("");
// 	const [arrayPhotos, setArrayPhotos] = useState([]);

// 	const url1 = `https://api.elchocrud.pro/api/v1/01d4ed96bc4043838c8418452e366a0c/photos_is_Bekents/${id}`;

// 	const getPhotos = async () => {
// 		try {
// 			const response = (await axios.get(url1)).data;
// 			setArrayPhotos([response]);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	useEffect(() => {
// 		getPhotos();
// 		dispatch(getBekents());
// 	}, []);

// 	const postCards = () => {
// 		const newData = {
// 			title: cardsInputValue,
// 		};
// 		dispatch(postBekents(newData));
// 	};

// 	const patchResult = (id: number, item: any) => {
// 		const newData = {
// 			title: item.title,
// 			columns: [
// 				...item.columns,
// 				{
// 					_id: Math.random(),
// 					name: columnsInputValue,
// 				},
// 			],
// 		};
// 		dispatch(patchCard({ newData, id }));
// 	};

// 	return (
// 		<ResultProject>
// 			{arrayPhotos.map((item, index) => (
// 				<img src={item.logo} key={index} alt="logo" />
// 			))}
// 			<Content>
// 				{isCardsBoolean ? (
// 					<Button onClick={() => setIsCardsBoolean(false)}>
// 						Добавить список
// 					</Button>
// 				) : (
// 					<FormDiv>
// 						<Input
// 							type="text"
// 							placeholder="Ввести заголовок списка"
// 							value={cardsInputValue}
// 							onChange={(e) => setCardsInputValue(e.target.value)}
// 						/>
// 						<div className="divResult">
// 							<button
// 								onClick={() => {
// 									postCards();
// 									setIsCardsBoolean(true);
// 								}}>
// 								Добавить список
// 							</button>
// 							<img src={logo} alt="logo incon" />
// 						</div>
// 					</FormDiv>
// 				)}
// 				{cards.map((item, index) => (
// 					<div key={index}>
// 						<p>{item.title}</p>
// 						{item.columns.map(
// 							(
// 								column,
// 								colIndex // fixed iteration over columns
// 							) => (
// 								<div key={colIndex}>
// 									<p>{column.name}</p>
// 								</div>
// 							)
// 						)}
// 						{isResult !== item._id ? (
// 							<button onClick={() => setIsResult(item._id)}>
// 								{" "}
// 								// fixed setting isResult Добавить карточку
// 							</button>
// 						) : (
// 							<>
// 								<input
// 									type="text"
// 									value={columnsInputValue}
// 									onChange={(e) => setColumnsInputValue(e.target.value)}
// 								/>
// 								<button onClick={() => patchResult(item._id, item)}>
// 									{" "}
// 									// fixed passing parameters to patchResult Добавить карточку
// 								</button>
// 								<button onClick={() => setIsResult(true)}>inputNoo</button> //
// 								fixed setting isResult
// 							</>
// 						)}
// 					</div>
// 				))}
// 			</Content>
// 		</ResultProject>
// 	);
// };

// export default Todo_List;

// const Button = styled.button`
// 	width: 145px;
// 	height: 51px;
// 	border-radius: 4px;
// 	background-color: #7e7a7a;
// 	color: black;
// `;

// const ResultProject = styled.div`
// 	img {
// 		width: 100%;
// 		position: relative;
// 		z-index: -100;
// 		height: 100%;
// 		bottom: auto;
// 		bottom: 3.3rem;
// 	}
// `;

// const Content = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	position: absolute;
// 	bottom: 32rem;
// `;

// const FormDiv = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	gap: 0.6rem;
// 	.divResult {
// 		display: flex;
// 		justify-content: space-evenly;
// 		align-items: center;
// 		padding-right: 3rem;
// 		gap: 1rem;
// 		button {
// 			width: 120px;
// 			height: 45px;
// 			background-color: #2424e3;
// 			color: black;
// 			font-size: 18px;
// 		}
// 		img {
// 			width: 1.3rem;
// 			height: auto;
// 			z-index: 100;
// 			position: relative;
// 			top: 0rem;
// 		}
// 	}
// `;

// const Input = styled.input`
// 	width: 200px;
// 	height: 40px;
// 	border-radius: 4px;
// 	padding-left: 10px;
// 	border: 1px solid blue;
// 	&:active {
// 		border: 2px solid blue;
// 		outline: none;
// 	}
// `;

const Pages1 = () => {
	const handleResult = () => {
		localStorage.clear("cards");
		localStorage.clear("CardsMap");
	};
	return <div>Коош келиниз!!!
		<button onClick={handleResult}>DeleteLocal</button>
	</div>;
};

export default Pages1;

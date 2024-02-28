import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./pages/login/Login";
import Pages1 from "./pages/pages1/Pages1";
import styled from "styled-components";
import { Header } from "./header/Header";
import Registr from "./pages/registr/Registr";
import Todo_List from "./pages/todo-list/Todo_List";

const Layout = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if(pathname === '/registr') {
		return (
			<Routes>
				<Route path="/registr" element={<Registr />} />
			</Routes>
		)
	}
	return (
		<LayoutContainer>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Pages1 />} />
					<Route path="/:id" element={<Todo_List />} />
				</Routes>
			</main>
		</LayoutContainer>
	);
};

export default Layout;

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;

	main {
		margin-top: 100px;
	}
`
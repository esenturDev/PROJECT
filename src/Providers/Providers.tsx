import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Providers: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = localStorage.getItem("isAuth");
	const isAuthResult = !!isAuth;

	useEffect(() => {
		if (!isAuthResult && pathname === "/login") {
			navigate("/login");
		} else if (!isAuthResult && pathname === "/") {
			navigate("/registr");
		} else if(isAuthResult && pathname === '/login') {
			navigate('/')
		}
	}, [pathname, isAuthResult, navigate]);

	return <>{children}</>;
};

export default Providers;

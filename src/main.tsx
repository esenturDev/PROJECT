import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers/Providers";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Providers>
					<App />
				</Providers>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

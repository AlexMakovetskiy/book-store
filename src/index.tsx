import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";
import { persistor, store } from "./services/redux";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);

reportWebVitals();

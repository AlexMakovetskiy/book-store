import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ErrorFallback from "./components/errorFallback/ErrorFallback";
import { RouteList } from "./services/router/RouteList";
import { Path } from "./services/router/RouteLines";

import "./index.scss";
import "./App.scss";

function App() {
	const navigator = useNavigate();

	function handleOnReset() {
		return navigator(Path.NotFound);
	}

	return (
		<div className="app-wrapper">
			<Header />
			<ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleOnReset}>
				<RouteList />
			</ErrorBoundary>
			<Footer />
		</div>
	);
}

export default App;

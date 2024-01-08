import { Link } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";

import { Path } from "../../services/router/RouteLines";

import "./ErrorFallback.scss";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div className="errorfallback-wrap">
			<h1>Произошла ошибка</h1>
			<p>{String(error)}</p>
			<button onClick={() => resetErrorBoundary}>Вернуться</button>
			<Link to={Path.Main}>На главную</Link>
		</div>
	);
}

export default ErrorFallback;

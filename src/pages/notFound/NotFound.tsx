import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
    const navigator = useNavigate();
    return (
        <div className="notfound-page-container">
            <h1 className="notfound-page-container__title">Error 404</h1>
            <p className="notfound-page-container__subtitle">The requested page has never been on our site or it has been deleted.</p> 
            <button className="notfound-page-container__goback-action custom-btn" onClick={() => navigator(-1)}>return to previous page</button>
        </div>
    );
};

export default NotFound;
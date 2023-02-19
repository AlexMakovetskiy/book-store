import { useNavigate } from 'react-router-dom';

import '../../style/reset.scss';
import '../../style/common.scss';
import './NotFound.scss';

export const NotFound = () => {
    const navigator = useNavigate();
    return (
        <div className="notfound-page-conteiner">
            <h1 className="notfound-page-conteiner__title">Error 404</h1>
            <p className="notfound-page-conteiner__subtitle">The requested page has never been on our site or it has been deleted.</p> 
            <button className="notfound-page-conteiner__goback-action custom-btn" onClick={() => navigator(-1)}>return to previous page</button>
        </div>
    );
}
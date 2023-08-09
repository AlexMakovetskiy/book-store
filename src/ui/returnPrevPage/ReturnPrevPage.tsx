import { useNavigate } from 'react-router-dom';

import '../../style/reset.scss';
import '../../style/common.scss';

function ReturnPrevPage () {
    const navigator = useNavigate();
    return (
        <button className="arrow-btn" onClick={() => navigator(-1)}>
            <img src="/assets/vector/pages/profile/Icon-Arrow.svg" alt="arrow" className="arrow-btn__arrow" />
        </button>
    );
}

export default ReturnPrevPage;
import '../../style/reset.scss';
import '../../style/common.scss';
import './Footer.scss';

export function Footer () {
    return (
        <footer className='bottom-panel custom-font'>
            <span className="bottom-panel__title application-name">©2023 Bookstore</span>
            <span className="bottom-panel__title rights">All rights reserved</span>
        </footer>
    );
}
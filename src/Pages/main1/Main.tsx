import Subscription from '../../components/subscription1/Subscription';
import Books from '../../components/bookElements/bookListContent1/BookListContent';

import './Main.scss';

const Main = () => {
    return (
        <div className="new-books-wrapper">
            <h2 className="new-books-wrapper__title">New Releases Books</h2>
            <div className="new-books-wrapper__books"></div>
            <Books></Books>
            <Subscription/>
        </div>
    );
};

export default Main;
import { useEffect } from 'react';

import Subscription from '../../components/subscription/Subscription';
import Books from '../../components/bookElements/bookListContent/BookListContent';

import './Main.scss';

const Main = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

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
import { Subscription } from "../../components/Subscription/Subscription";
import { Books } from "../../components/Books/Books";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Main.scss';

export const Main = () => {
    return (
        <div className="new-books-wrapper">
            <h2 className="new-books-wrapper__title">New Releases Books</h2>
            <div className="new-books-wrapper__books"></div>
            <Books></Books>
            <Subscription/>
        </div>
    );
}
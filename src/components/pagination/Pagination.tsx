import { Link } from 'react-router-dom';

import './Pagination.scss';

interface IPagination {
    currPage: number,
    pageCount: number,
    inputData?: string | undefined,
}

const getPreviousNextpages = (pageCount: number, currPage: number) => {
    let previousPageNumber = 1, nextPageNumber = 0;
    if(currPage > 1)
        previousPageNumber = currPage - 1;
    if(pageCount > currPage)
        nextPageNumber = currPage + 1;
    else
        nextPageNumber = currPage;
    return {previousPageNumber, nextPageNumber};
};


function Pagination ({currPage, pageCount, inputData}: IPagination) {
    const {previousPageNumber, nextPageNumber} = getPreviousNextpages(pageCount, currPage);

    if(pageCount === 1)
        return <></>;

    return (
        <div className="pagination-container">
            <Link to={`/search-data/${inputData}/${previousPageNumber}`}>
                <button className="pagination-container__go-grevious-page">
                    <img 
                        src="/assets/vector/components/pagination/left-arrow-pagination.svg" 
                        alt="parevious page arrow" 
                        className="pagination-container__go-grevious-page__arrow" 
                    />
                    <span>Prev</span>
                </button>
            </Link>
            <div className="row-pages-container">
                {   
                    currPage > 1 && pageCount > 4 && 
                    <>
                        <Link to={`/search-data/${inputData}/1`} >1</Link>
                        <div>...</div>
                    </>
                }
                {   
                    currPage > 2  &&
                    <>
                        <Link to={`/search-data/${inputData}/${currPage - 1}`}>{currPage - 1}</Link>
                    </>
                }
                {   
                    <>
                        <Link to={`/search-data/${inputData}/${currPage}`} className="current-page-text">{currPage}</Link>
                    </>
                }
                {       
                    currPage < pageCount &&  currPage + 1 !== pageCount &&
                    <>
                        <Link to={`/search-data/${inputData}/${currPage + 1}`}>{currPage + 1}</Link>
                    </>
                }
                {   
                    currPage !== pageCount &&
                    <>
                        <div>...</div>
                        <Link to={`/search-data/${inputData}/${pageCount}`}>{pageCount}</Link>
                    </>
                }
            </div>
            <Link to={`/search-data/${inputData}/${nextPageNumber}`}>
                <button className="pagination-container__go-next-page">
                    <span>Next</span>
                    <img src="/assets/vector/components/pagination/right-arrow-pagination.svg" alt="next page arrow" className="pagination-container__go-next-page__arrow" />
                </button>
            </Link>

        </div>
    );
}

export default Pagination;
export const getPreviousNextpages = (pageCount: number, currPage: number) => {
    let previousPageNumber = 1, nextPageNumber = 0;
    if(currPage > 1)
        previousPageNumber = currPage - 1;
    if(pageCount > currPage)
        nextPageNumber = currPage + 1;
    else
        nextPageNumber = currPage;
    return {previousPageNumber, nextPageNumber};
};
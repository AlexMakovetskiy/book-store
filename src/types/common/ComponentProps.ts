export interface IPagination {
    currPage: number,
    pageCount: number,
    inputData?: string | undefined,
}

export interface IPreview {
    handleClose: () => void,
}
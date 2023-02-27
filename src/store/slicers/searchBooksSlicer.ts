import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces/books";
import { getBooksFoundData } from "../thunks/getBooksFoundData";

interface IBooksSearchInitialState {
    books: IBook[],
    error: string | null,
    loading: boolean,
    total: number,
};

const initialState:IBooksSearchInitialState = {
    books: [],
    error: null,
    loading: false,
    total: 0,
}

const searchBooksSlicer = createSlice({
    name: 'foundbooks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getBooksFoundData.fulfilled, (state: IBooksSearchInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.books = action.payload.books ?? [];
            state.total = Number(action.payload.total);
        });

        builder.addCase(getBooksFoundData.rejected, (state: IBooksSearchInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.message;
        });

        builder.addCase(getBooksFoundData.pending, (state: IBooksSearchInitialState) => {
            state.loading = true;
        });
    }
});

export const {} = searchBooksSlicer.actions;
export default searchBooksSlicer.reducer;
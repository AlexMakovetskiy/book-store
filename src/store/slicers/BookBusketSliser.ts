import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBusketBook } from "../../interfaces/store/reduce/bookSlice";

interface IBusketBookState {
    busketbooks: IBusketBook[]
}

const initialState: IBusketBookState = {
    busketbooks: []
}

const BookBusketSlice = createSlice({
    name: 'busketbooks',
    initialState,
    reducers: {
        setBusketBook: (state: IBusketBookState, action: PayloadAction<IBusketBook>) => {
            state.busketbooks = [...state.busketbooks, action.payload]
        },
        increaseBusketSum: (state: IBusketBookState, action: PayloadAction<string>) => {
            state.busketbooks = state.busketbooks.map((book) =>
                book.isbn13 === action.payload ? ({...book, count: book.count + 1}) : book
            );
        },
        deceaseBusketSum: (state: IBusketBookState, action: PayloadAction<string>) => {
            state.busketbooks = state.busketbooks.map((book) => 
                book.isbn13 === action.payload ? ({...book, count: book.count !== 1 ? book.count - 1 : 1}) : book
            );
        },
        deleteBusketBook: (state: IBusketBookState, action: PayloadAction<string>) => {
            state.busketbooks = state.busketbooks.filter((book) => 
                book.isbn13 !== action.payload
            );
        }
    }
});

export default BookBusketSlice.reducer;
export const {setBusketBook, increaseBusketSum, deceaseBusketSum, deleteBusketBook} = BookBusketSlice.actions;
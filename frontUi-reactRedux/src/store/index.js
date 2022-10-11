import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
})

export const actions =  counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})


// import {createStore} from 'redux';

// const reducerFn = (state = { counter: 0 }, action) => {
//     // Synchronouns unction
//     // we should not mutate the original state, for redux state to  work correctly

//     if(action.type === "INC") {
//         return { counter: state.counter+1};
//     }
//     if(action.type === "DEC") {
//         return { counter: state.counter-1};
//     }

//     if(action.type === "ADD") {
//         return { counter: state.counter + action.payload};
//     }

//     return state;
// }

// const store = createStore(reducerFn);

export default store;
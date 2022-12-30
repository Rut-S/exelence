import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    customers: [],
    message: ''
}

const customer = {
    setCustomers(state, action) {
        state.customers = action.payload;
    },
    setMessage(state, action) {
        state.message = action.payload;
    }
};


export default produce((state, action) => createReducer(state, action, customer), initialState);


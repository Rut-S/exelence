import { combineReducers, createStore } from 'redux';
import bankReducer from './reducers/bank.reducer';
import { reducer as formReducer } from 'redux-form';
import customerReducer from './reducers/customer.reducer';

const reducers =
    combineReducers({
        form: formReducer,
        bankReducer,
        customerReducer
    })

const store = createStore(reducers
)

export default store;


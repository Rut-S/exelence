import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
  cities: [],
  banks: [],
  bankBranches: [],
  filteredBankBranches: []
}

const bank = {
  setBanks(state, action) {
    const { Banks, BankBranches } = action.payload;
    state.banks = Banks;
    state.bankBranches = BankBranches;
  },
  filterBankBranch(state, action) {
    state.filteredBankBranches = state.bankBranches.filter(branch => branch.BankCode === action.payload);

  },
  setCities(state, action) {
    state.cities = action.payload;
  }
};


export default produce((state, action) => createReducer(state, action, bank), initialState);


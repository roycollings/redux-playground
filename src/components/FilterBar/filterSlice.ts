import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Disease {
  id: string;
  name: string;
}

export interface FilterState {
  filteredData: Array<Disease>;
}

// Just a random data set to let us play with Redux state.
const allData: Array<Disease> = [
  { id: '1', name: 'Fragile X syndrome' },
  { id: '2', name: 'acute myeloid leukemia' },
  { id: '3', name: 'tuberous sclerosis complex' },
  { id: '4', name: 'retinitis pigmentosa' },
  { id: '5', name: 'Pitt-Hopkins syndrome' },
];

const initialState: FilterState = {
  filteredData: allData,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    // Functions that SET the state.
    setFilteredData: (state, action: PayloadAction<string>) => {
      console.log(`Setting state to records that contain '${action.payload}' ...`)
      state.filteredData = allData.filter(({ name }) =>
        name.includes(action.payload),
      );
    },
  },
});

export const { setFilteredData } = filterSlice.actions;

// Functions that GET the state.
export const selectFilteredData = (state: RootState) => state.filter.filteredData;

export default filterSlice.reducer;

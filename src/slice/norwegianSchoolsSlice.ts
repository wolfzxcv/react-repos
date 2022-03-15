import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../app/store';

export interface NorwegianSchoolsState {
  mergeData: Array<any>;
  select: string;
  input: string;
  page: number;
  isAscending: boolean;
  showList: boolean;
}

const initialState: NorwegianSchoolsState = {
  mergeData: [],
  select: 'Choose a county',
  input: '',
  page: 0,
  isAscending: true,
  showList: false
};

type IFylke = {
  Fylkesnr: string;
  Navn: string;
  OrgNr: string;
  OrgNrFylkesmann: string;
};

type IEnhete = {
  FylkeNr?: string;
};

type IMergeData = IEnhete & {
  Navn: string;
  isFavorite: boolean;
};

export const fetchSchoolData = createAsyncThunk(
  'norwegianSchools/fetchSchoolData',
  async () => {
    try {
      console.log('fetchSchoolData');
      const responseData = await fetch('https://data-nsr.udir.no/enheter');
      const data: IMergeData[] = await responseData.json();

      const responseCounty = await fetch('https://data-nsr.udir.no/fylker');
      const county: IFylke[] = await responseCounty.json();

      // merge data to have county name in the main data
      const allData: IMergeData[] = data.map(A => {
        const finder = county.find(B => A.FylkeNr === B.Fylkesnr) || undefined;
        A.Navn = finder?.Navn || '';
        A.isFavorite = false;
        return A;
      });
      return allData;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
);

export const norwegianSchoolsSlice = createSlice({
  name: 'norwegianSchools',
  initialState,
  reducers: {
    setSelect: (
      state,
      action: PayloadAction<NorwegianSchoolsState['select']>
    ) => {
      state.select = action.payload;
    },
    setIsAscending: (
      state,
      action: PayloadAction<NorwegianSchoolsState['isAscending']>
    ) => {
      state.isAscending = action.payload;
    },
    setInput: (
      state,
      action: PayloadAction<NorwegianSchoolsState['input']>
    ) => {
      state.input = action.payload;
    },
    setPage: (state, action: PayloadAction<NorwegianSchoolsState['page']>) => {
      state.page = action.payload;
    },
    setMergeData: (
      state,
      action: PayloadAction<NorwegianSchoolsState['mergeData']>
    ) => {
      state.mergeData = action.payload;
    },
    setShowList: (
      state,
      action: PayloadAction<NorwegianSchoolsState['showList']>
    ) => {
      state.showList = action.payload;
    }
  }
});

export const {
  setSelect,
  setIsAscending,
  setInput,
  setPage,
  setMergeData,
  setShowList
} = norwegianSchoolsSlice.actions;

export const selectNorwegianSchools = (state: RootState) =>
  state.norwegianSchools;

export default norwegianSchoolsSlice.reducer;

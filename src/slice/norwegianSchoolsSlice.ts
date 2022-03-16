import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../app/store';
import enheterJson from '../views/NorwegianSchools/enheter.json';

type IEnheterJson = {
  enheter: IEnhete[];
};

export type IFylke = {
  Fylkesnr: string;
  Navn: string;
  OrgNr: string;
  OrgNrFylkesmann: string;
};

export type IEnhete = {
  EndretDato: string;
  Epost: string;
  ErAktiv: boolean;
  ErGrunnSkole: boolean;
  ErOffentligSkole: boolean;
  ErPrivatSkole: boolean;
  ErSkole: boolean;
  ErSkoleEier: boolean;
  ErVideregaaendeSkole: boolean;
  FulltNavn: string;
  FylkeNr: string;
  Karakteristikk: string;
  KommuneNavn: string;
  KommuneNr: string;
  NSRId: number;
  Navn: string;
  OrgNr: string;
  VisesPaaWeb: boolean;
  isFavorite: boolean;
};

type IMergeData = {
  OrgNr: IEnhete['OrgNr'];
  isFavorite: boolean;
  Navn: string;
  FulltNavn: IEnhete['FulltNavn'];
  Epost: IEnhete['Epost'];
  Karakteristikk: IEnhete['Karakteristikk'];
  ErOffentligSkole: IEnhete['ErOffentligSkole'];
  ErGrunnSkole: IEnhete['ErGrunnSkole'];
};

export interface NorwegianSchoolsState {
  mergeData: IMergeData[];
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

export const fetchSchoolData = createAsyncThunk(
  'norwegianSchools/fetchSchoolData',
  async () => {
    try {
      const { enheter } = enheterJson as IEnheterJson;

      const data = enheter;

      const responseCounty = await fetch('https://data-nsr.udir.no/fylker');
      const county: IFylke[] = await responseCounty.json();

      // merge data to have county name in the main data
      const allData: IMergeData[] = data.map(A => {
        const finder = county.find(B => A.FylkeNr === B.Fylkesnr) || undefined;
        A.Navn = finder?.Navn || '';
        A.isFavorite = false;
        return {
          OrgNr: A.OrgNr,
          isFavorite: A.isFavorite,
          Navn: A.Navn,
          FulltNavn: A.FulltNavn,
          Epost: A.Epost,
          Karakteristikk: A.Karakteristikk,
          ErOffentligSkole: A.ErOffentligSkole,
          ErGrunnSkole: A.ErGrunnSkole
        };
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
      console.log('setMergeData');
      state.mergeData = action.payload;
    },
    setShowList: (
      state,
      action: PayloadAction<NorwegianSchoolsState['showList']>
    ) => {
      state.showList = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSchoolData.fulfilled, (state, action) => {
      state.mergeData = action.payload;
    });
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

import { TFetchStatus } from '@lib/types/api';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { any } from 'prop-types';
import { RootState } from '../app/store';
import { IDongil } from './walkingDongilSlice';

interface ISuggestedDongil {
  userName: string;
  isFemale: boolean;
  challengeList: IDongil[];
}

export type TSuggestedDongilsState = {
  suggestedDongils: ISuggestedDongil[] | null;
  suggestedDongilsStatus?: TFetchStatus;
};

const initialState: TSuggestedDongilsState = {
  suggestedDongils: null,
  suggestedDongilsStatus: 'idle',
};

// GET: 제안받은 돈길 조회
export const fetchSuggestedDongils = createAsyncThunk(
  'suggestedDongils/fetch',
  async (thunkPayload: { axiosPrivate: AxiosInstance; kidId: number }) => {
    const { axiosPrivate, kidId } = thunkPayload;
    const response = await axiosPrivate.get(
      `/challenge/kid/${kidId}?status=pending`,
    );
    return response.data;
  },
);

export const suggestedDongilsSlice = createSlice({
  name: 'suggestedDongils',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSuggestedDongils.pending, (state) => {
        state.suggestedDongilsStatus = 'loading';
      })
      .addCase(fetchSuggestedDongils.fulfilled, (state, action) => {
        state.suggestedDongilsStatus = 'succeeded';
        if (state.suggestedDongils === null) {
          state.suggestedDongils = [];
          state.suggestedDongils[0] = action.payload.data;
        } else {
          state.suggestedDongils = state.suggestedDongils.concat(
            action.payload.data,
          );
        }
        console.log(state.suggestedDongils);
      })
      .addCase(fetchSuggestedDongils.rejected, (state, action) => {
        state.suggestedDongilsStatus = 'failed';
        console.error(action.error.message);
      });
  },
});

export const selectSuggestedDongilsStatus = (state: RootState) =>
  state.suggestedDongils.suggestedDongilsStatus;
export const selectSuggestedDongils = (state: RootState) =>
  state.suggestedDongils.suggestedDongils;
export default suggestedDongilsSlice.reducer;

// https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
// https://kyounghwan01.github.io/blog/React/redux/redux-toolkit/#createslice
// https://velog.io/@vvvvwvvvv/React-21.-Redux-Saga-createSlicecreateSelector-%EC%A0%81%EC%9A%A9
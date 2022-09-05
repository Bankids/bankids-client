import { TFetchStatus } from '@lib/types/TFetchStatus';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootState } from '../app/store';

interface IParentSummary {
  kidId: number;
  weekInfo: {
    currentSavings: number;
    totalPrice: number;
  };
}

interface IParentSummariesState {
  parentSummaries: IParentSummary[];
  parentSummariesStatus?: TFetchStatus;
}

const initialState: IParentSummariesState = {
  parentSummaries: [],
  parentSummariesStatus: 'idle',
};

interface IFetchParentSummariesThunkPayload
  extends Pick<IParentSummary, 'kidId'> {
  axiosPrivate: AxiosInstance;
}

// GET: 부모 홈 페이지 Summary 데이터 조회
export const fetchParentSummaries = createAsyncThunk(
  'parentSummaries/fetch',
  async (thunkPayload: IFetchParentSummariesThunkPayload) => {
    const { axiosPrivate, kidId } = thunkPayload;
    const response = await axiosPrivate.get(`/challenge/kid/progress/${kidId}`);
    return response.data;
  },
);

export const parentSummariesSlice = createSlice({
  name: 'parentSummaries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchParentSummaries.pending, (state) => {
        state.parentSummariesStatus = 'loading';
      })
      .addCase(fetchParentSummaries.fulfilled, (state, action) => {
        state.parentSummariesStatus = 'succeeded';
        state.parentSummaries = state.parentSummaries.concat(
          action.payload.data,
        );
      })
      .addCase(fetchParentSummaries.rejected, (state) => {
        state.parentSummariesStatus = 'failed';
      });
  },
});

export const selectParentSummariesStatus = (state: RootState) =>
  state.parentSummaries.parentSummariesStatus;
export const selectParentSummaries = (state: RootState) =>
  state.parentSummaries.parentSummaries;

export default parentSummariesSlice.reducer;

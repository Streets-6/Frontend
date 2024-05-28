import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IInfrastructureType } from '../../api/apiTypes'

import { getInfrastructureData } from '../../api/api'
import { RootState } from '../store'

interface IInfrastructureStateType {
  infrastructureArray: IInfrastructureType[]
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: IInfrastructureStateType = {
  infrastructureArray: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchInfrastructureData = createAsyncThunk(
  'fetch/infrastructure',
  getInfrastructureData
)

const infrastructure = createSlice({
  name: 'infrastructure',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchInfrastructureData.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchInfrastructureData.fulfilled, (state, action) => {
        state.infrastructureArray = action.payload
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchInfrastructureData.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export default infrastructure.reducer

export const getInfrastructure = (state: RootState) =>
  state.infrastructure.infrastructureArray
export const getInfrastructureIsLoaded = (state: RootState) =>
  state.infrastructure.isSuccess

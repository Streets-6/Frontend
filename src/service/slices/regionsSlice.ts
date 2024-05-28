import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  IEventType,
  IInfrastructureType,
  IRegionType,
} from '../../api/apiTypes'
import { ISelectedRegionType } from '../../utils/types'
import { defaultSelectedRegion } from '../../utils/constDefaultSelectedRegion'
import { getRegionsData } from '../../api/api'
import { RootState } from '../store'

interface IRegionsStateType {
  regionsArray: IRegionType[]
  filteredRegionsArray: IRegionType[]
  selectedRegion: ISelectedRegionType
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: IRegionsStateType = {
  regionsArray: [],
  filteredRegionsArray: [],
  selectedRegion: defaultSelectedRegion,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchRegionsData = createAsyncThunk(
  'fetch/regions',
  getRegionsData
)

const regions = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setSelectedRegion: (state, action: PayloadAction<ISelectedRegionType>) => {
      state.selectedRegion = action.payload
    },
    setSelectedRegionEvents: (state, action: PayloadAction<IEventType[]>) => {
      state.selectedRegion.events = action.payload
    },
    setSelectedRegionInfrastructure: (
      state,
      action: PayloadAction<IInfrastructureType[]>
    ) => {
      state.selectedRegion.infrastructure = action.payload
    },
    setFilteredRegions: (state, action: PayloadAction<IRegionType[]>) => {
      state.filteredRegionsArray = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRegionsData.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchRegionsData.fulfilled, (state, action) => {
        state.regionsArray = action.payload
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchRegionsData.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export const {
  setSelectedRegion,
  setFilteredRegions,
  setSelectedRegionEvents,
  setSelectedRegionInfrastructure,
} = regions.actions

export default regions.reducer

export const getRegions = (state: RootState) => state.regions.regionsArray
export const getFilteredRegions = (state: RootState) =>
  state.regions.filteredRegionsArray
export const getSelectedRegion = (state: RootState) =>
  state.regions.selectedRegion
export const getRegionsIsLoaded = (state: RootState) => state.regions.isSuccess

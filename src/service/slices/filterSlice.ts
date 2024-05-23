import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IFilterStateType {
  contentTypeFilter: string
  disciplineFilter: string
  presentationType: string
}

const initialState: IFilterStateType = {
  contentTypeFilter: 'all',
  disciplineFilter: '',
  presentationType: 'map',
}

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setContentTypeFilter: (state, action: PayloadAction<string>) => {
      state.contentTypeFilter = action.payload
    },
    setDisciplineFilter: (state, action: PayloadAction<string>) => {
      state.disciplineFilter = action.payload
    },
    setPresentationType: (state, action: PayloadAction<string>) => {
      state.presentationType = action.payload
    },
  },
})

export const {
  setContentTypeFilter,
  setDisciplineFilter,
  setPresentationType,
} = filter.actions

export default filter.reducer

export const getContentTypeFilter = (state: RootState) =>
  state.filter.contentTypeFilter
export const getDisciplineFilter = (state: RootState) =>
  state.filter.disciplineFilter
export const getPresentationType = (state: RootState) =>
  state.filter.presentationType

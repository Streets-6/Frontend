import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IEventType } from '../../api/apiTypes'

import { getEventsData } from '../../api/api'
import { RootState } from '../store'

interface IEventsStateType {
  eventsArray: IEventType[]
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: IEventsStateType = {
  eventsArray: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchEventsData = createAsyncThunk('fetch/events', getEventsData)

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEventsData.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchEventsData.fulfilled, (state, action) => {
        state.eventsArray = action.payload
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchEventsData.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export default events.reducer

export const getEvents = (state: RootState) => state.events.eventsArray

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INewsType } from '../../api/apiTypes'

import { getNewsData } from '../../api/api'
import { RootState } from '../store'

interface INewsStateType {
  newsArray: INewsType[]
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: INewsStateType = {
  newsArray: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchNewsData = createAsyncThunk('fetch/news', getNewsData)

const news = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewsData.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.newsArray = action.payload
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export default news.reducer
export const getNews = (state: RootState) => state.news.newsArray

import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { IProjectType } from '../../api/apiTypes'

import { getProjectsData } from '../../api/api'
import { RootState } from '../store'

interface IProjectsStateType {
  projectsArray: IProjectType[]
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: IProjectsStateType = {
  projectsArray: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchProjectsData = createAsyncThunk(
  'fetch/projects',
  getProjectsData
)

const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjectsData.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchProjectsData.fulfilled, (state, action) => {
        state.projectsArray = action.payload
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchProjectsData.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export default projects.reducer
export const getProjects = (state: RootState) => state.projects.projectsArray
export const getCompletedProjects = createSelector(
  [getProjects],
  projectsArray =>
    projectsArray.filter(project => project.status === 'completed')
)
export const getFirstCurrentProject = (state: RootState) =>
  state.projects.projectsArray.find(project => project.status === 'current')

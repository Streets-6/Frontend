import { createSlice } from '@reduxjs/toolkit'
import type { Map } from 'leaflet'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IMapStateType {
  mapInstance?: Map
  isMapDefaultView: boolean
  isOfficePopupOpen: boolean
  isMarkerPopupOpen: boolean
  isMapHeaderVisible: boolean
  isInfrastructureMarkersVisible: boolean
  isEventMarkersVisible: boolean
  isInfrastructureButtonClicked: boolean
  isEventButtonClicked: boolean
}

const initialState: IMapStateType = {
  isMapDefaultView: true,
  isOfficePopupOpen: false,
  isMarkerPopupOpen: false,
  isMapHeaderVisible: false,
  isInfrastructureMarkersVisible: false,
  isEventMarkersVisible: false,
  isInfrastructureButtonClicked: false,
  isEventButtonClicked: false,
}

const map = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMapInstance: (state, action: PayloadAction<Map>) => {
      state.mapInstance = action.payload
    },
    setIsMapDefaultView: (state, action: PayloadAction<boolean>) => {
      state.isMapDefaultView = action.payload
    },
    setIsOfficePopupOpen: (state, action: PayloadAction<boolean>) => {
      state.isOfficePopupOpen = action.payload
    },
    setIsMarkerPopupOpen: (state, action: PayloadAction<boolean>) => {
      state.isMarkerPopupOpen = action.payload
    },
    setIsMapHeaderVisible: (state, action: PayloadAction<boolean>) => {
      state.isMapHeaderVisible = action.payload
    },
    setIsInfrastructureMarkersVisible: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isInfrastructureMarkersVisible = action.payload
    },
    setIsEventMarkersVisible: (state, action: PayloadAction<boolean>) => {
      state.isEventMarkersVisible = action.payload
    },
    setIsInfrastructureButtonClicked: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isInfrastructureButtonClicked = action.payload
    },
    setIsEventButtonClicked: (state, action: PayloadAction<boolean>) => {
      state.isEventButtonClicked = action.payload
    },
  },
})

export const {
  setMapInstance,
  setIsMapDefaultView,
  setIsOfficePopupOpen,
  setIsMarkerPopupOpen,
  setIsMapHeaderVisible,
  setIsInfrastructureMarkersVisible,
  setIsEventMarkersVisible,
  setIsInfrastructureButtonClicked,
  setIsEventButtonClicked,
} = map.actions

export default map.reducer

export const getMap = (state: RootState) => state.map.mapInstance
export const getIsMapDefaultView = (state: RootState) =>
  state.map.isMapDefaultView
export const getIsOfficePopupOpen = (state: RootState) =>
  state.map.isOfficePopupOpen
export const getIsMarkerPopupOpen = (state: RootState) =>
  state.map.isMarkerPopupOpen
export const getIsMapHeaderVisible = (state: RootState) =>
  state.map.isMapHeaderVisible
export const getIsInfrastructureMarkersVisible = (state: RootState) =>
  state.map.isInfrastructureMarkersVisible
export const getIsEventMarkersVisible = (state: RootState) =>
  state.map.isEventMarkersVisible
export const getIsInfrastructureButtonClicked = (state: RootState) =>
  state.map.isInfrastructureButtonClicked
export const getIsEventButtonClicked = (state: RootState) =>
  state.map.isEventButtonClicked

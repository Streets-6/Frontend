import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IModalsStateType {
  isAuthModalOpen: boolean
  isDonateModalOpen: boolean
}

const initialState: IModalsStateType = {
  isAuthModalOpen: false,
  isDonateModalOpen: false,
}

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload
    },
    setIsDonateModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDonateModalOpen = action.payload
    },
  },
})

export const { setIsAuthModalOpen, setIsDonateModalOpen } = modals.actions

export default modals.reducer

export const getIsAuthModalOpen = (state: RootState) =>
  state.modals.isAuthModalOpen
export const getIsDonateModalOpen = (state: RootState) =>
  state.modals.isDonateModalOpen

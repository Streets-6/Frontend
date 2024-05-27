import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

type TAuthModalType = 'login' | 'registration'

interface IModalsStateType {
  isAuthModalOpen: boolean
  isDonateModalOpen: boolean
  authModalType: TAuthModalType
}

const initialState: IModalsStateType = {
  isAuthModalOpen: false,
  isDonateModalOpen: false,
  authModalType: 'registration',
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
    setAuthModalType: (state, action: PayloadAction<TAuthModalType>) => {
      state.authModalType = action.payload
    },
  },
})

export const { setIsAuthModalOpen, setIsDonateModalOpen, setAuthModalType } =
  modals.actions

export default modals.reducer

export const getIsAuthModalOpen = (state: RootState) =>
  state.modals.isAuthModalOpen
export const getIsDonateModalOpen = (state: RootState) =>
  state.modals.isDonateModalOpen
export const getAuthModalType = (state: RootState) => state.modals.authModalType

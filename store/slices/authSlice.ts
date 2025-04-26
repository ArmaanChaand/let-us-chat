import { AuthUser, UserProfileDoc } from '@/lib/types/auth-types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface AuthState {
    user?: AuthUser | null
    profile: UserProfileDoc | null
}

// Define the initial state using that type
const initialState: AuthState = {
    user: undefined,
    profile: null
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        store_toggleAuthUser: (state, action: PayloadAction<AuthUser | null>) => {
            state.user = action.payload
        },
        store_toggleUserProfile: (state, action: PayloadAction<UserProfileDoc | null>) => {
            state.profile = action.payload
        },

    }
})

export const { store_toggleAuthUser, store_toggleUserProfile } = authSlice.actions

export default authSlice.reducer
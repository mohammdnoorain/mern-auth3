import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/userSlice'// we have change the name of reducer from userreducer

export const store=configureStore({

    reducer:{user:userReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }),

});


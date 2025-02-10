import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
    name: "stateData",
    initialState : {
        open_sidebar: false,
        loginPopup: false,
        registrationPopup: false,
        app_outlet: {
            outletName: "Live Events",
            outletIcon: 'liveEvents',
            outletData: null
        }
    },

    reducers : {
        sidebar: (state, action)=>{
            state.open_sidebar = action.payload
        },
        func_loginPopup: (state, action)=>{
            state.loginPopup = action.payload
        },
        func_registrationPopup: (state, action)=>{
            state.registrationPopup = action.payload
        },
        func_appOutlet: (state, action)=>{
            state.app_outlet.outletName = action.payload.name;
            state.app_outlet.outletIcon = action.payload.outletIcon;
            state.app_outlet.outletData = action.payload.apiData;
        }
    }
})

export default StateSlice;
export const {sidebar, func_appOutlet, func_loginPopup, func_registrationPopup } = StateSlice.actions;
import { createSlice } from '@reduxjs/toolkit';
import { beep } from '../../Global/utils';

export const initialState = {
  displayValue: '',
  currentPIN: '',
  lockStatus: 'OPEN',
};

export const safePanelSlice = createSlice({
  name: 'safePanel',
  initialState,
  // The `reducers` field defines reducers and associated actions
  reducers: {
    typePIN: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      if(state.displayValue === 'INVALID'){
        state.displayValue = '';
      }
      //Rule 1: PIN should be 4 digits
      if (state.displayValue.length === 4) {
        beep();
        console.warn('PIN length exceeded, max 4 digits!');
      }
      //Rule 2: PIN should show each digit in display on key press with a limit of 4
      if (state.displayValue.length < 4) {
        state.displayValue += action.payload;
      }
    },
    clearPIN: (state) => {
      //Rule 8: CLR should clear the current display
      state.displayValue = initialState.displayValue;
      console.info('Display cleared...');
    },
    enterPIN: (state) => {
      //Rule 3: Enter button should store the PIN code IF the safe is not currently locked
      //RUle 5: If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
      if(state.lockStatus !== 'LOCKED' && state.displayValue.length === 4){
        state.currentPIN = state.displayValue;
        state.lockStatus = 'LOCKED';
        console.info('PIN stored...');
      }
      //Rule 6: If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
      else if(state.lockStatus == 'LOCKED' && state.currentPIN === state.displayValue){
        state.lockStatus = 'OPEN';
        state.displayValue = initialState.displayValue;
      }
      //Rule 4: If the safe is locked on enter, show an error message (eg. INVALID) in the display window
      else{          
        state.displayValue = 'INVALID';
        beep();
        console.warn('INVALID ACTION - Safe already locked or PIN is not long enough!');
      }        
    },
  },
});

//actions
export const { typePIN, enterPIN, clearPIN } = safePanelSlice.actions;

//selectors
export const selectDisplayValue = (state) => state.safePanel.displayValue;
export const selectLockStatus = (state) => state.safePanel.lockStatus;

export default safePanelSlice.reducer;
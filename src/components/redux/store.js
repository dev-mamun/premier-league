/** ****************************************
 * Project: premier-league
 * File: ss.js
 * Created: 5/4/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { configureStore } from '@reduxjs/toolkit';
import leagueSlice from './league/leagueSlice';

const store = configureStore({
  reducer: {
    league: leagueSlice,
  },

});

export default store;

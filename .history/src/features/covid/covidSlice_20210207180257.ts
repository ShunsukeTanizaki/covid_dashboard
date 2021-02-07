import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { RootState } from '../../app/store';
import dataJson from './data.json';
import dataJsonDaily  from './dataDaily.json';

const apiUrl = "https://covid19.mathdro.id/api"

type APIDATA = typeof dataJson;
type APIDATADAILY = typeof dataJsonDaily;

type covidState = {
    data: APIDATA;
    country: string;
    dailyData: APIDATADAILY;
}
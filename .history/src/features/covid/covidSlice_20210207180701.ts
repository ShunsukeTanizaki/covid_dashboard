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
const initialState: covidState = {
    data: {
        "confirmed": {
            "value": 105795192,
            "detail": "https://covid19.mathdro.id/api/confirmed"
        },
        "recovered": {
            "value": 58914223,
            "detail": "https://covid19.mathdro.id/api/recovered"
        },
        "deaths": {
            "value": 2310146,
            "detail": "https://covid19.mathdro.id/api/deaths"
        },
        "dailySummary": "https://covid19.mathdro.id/api/daily",
        "dailyTimeSeries": {
            "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
            "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
        },
        "image": "https://covid19.mathdro.id/api/og",
        "source": "https://github.com/mathdroid/covid19",
        "countries": "https://covid19.mathdro.id/api/countries",
        "countryDetail": {
            "pattern": "https://covid19.mathdro.id/api/countries/[country]",
            "example": "https://covid19.mathdro.id/api/countries/USA"
        },
        "lastUpdate": "2021-02-07T08:22:44.000Z"
    },
    country: "country",
    dailyData:[
        {
        "totalConfirmed": 557,
        "mainlandChina": 548,
        "otherLocations": 9,
        "deltaConfirmed": 0,
        "totalRecovered": 0,
        "confirmed": {
        "total": 557,
        "china": 548,
        "outsideChina": 9
        },
        "deltaConfirmedDetail": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
        },
        "deaths": {
        "total": 17,
        "china": 17,
        "outsideChina": 0
        },
        "recovered": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
        },
        "active": 0,
        "deltaRecovered": 0,
        "incidentRate": 0.4510818002025252,
        "peopleTested": 0,
        "reportDate": "2020-01-22"
        }
    ]
}

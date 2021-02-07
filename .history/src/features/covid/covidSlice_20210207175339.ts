import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { RootState } from '../../app/store';

const apiUrl = "https://covid19.mathdro.id/api"


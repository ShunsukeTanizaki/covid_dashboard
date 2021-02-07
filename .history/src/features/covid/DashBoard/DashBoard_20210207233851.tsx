import React from 'react'
import styles from './DasbBoard.module.css';
import { 
    AppBar,
    Toolbar,
    TypographyStyle,
    Container,
    Grid
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { fetchAsyncGet, fetchAsyncGetDaily, selectData} from '../covidSlice'


const DashBoard: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

export default DashBoard

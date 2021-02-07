import React, { useEffect } from 'react'
import styles from './DasbBoard.module.css';
import { 
    AppBar,
    Toolbar,
    TypographyStyle,
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { fetchAsyncGet, fetchAsyncGetDaily, selectData} from '../covidSlice'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    content: {
        marginTop: 85,
    }
}))

const DashBoard: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    useEffect(() => {
        dispatch(fetchAsyncGet());
        dispatch(fetchAsyncGetDaily());
    }, [dispatch]);
    
    return (
        <div>
            
        </div>
    )
}

export default DashBoard

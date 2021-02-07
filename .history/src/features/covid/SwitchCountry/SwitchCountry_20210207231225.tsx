import React from 'react'
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { fetchAsyncGetCountry } from '../covidSlice';


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(3),
        minwidth: 320
    }
}))

const SwitchCountry: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            
        </div>
    )
}

export default SwitchCountry

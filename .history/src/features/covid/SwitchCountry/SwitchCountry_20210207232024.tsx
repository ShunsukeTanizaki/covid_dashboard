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
    const dispatch = useDispatch();

    const countries = [
        "japan",
        "china",
        "us",
        "france",
        "italy",
        "spain",
        "unaited kingdom",
        "germany",
        "russia",
        "brazil",
        "taiwan",
        "thailand",
        "new zealand",
        "sweden",
        "india"
    ];

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    dispatch(fetchAsyncGetCountry(e.target.value))
                }
            ></NativeSelect>
        </FormControl>
    )
}

export default SwitchCountry

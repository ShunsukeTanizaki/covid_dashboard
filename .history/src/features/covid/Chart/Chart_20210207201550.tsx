import React from 'react'
import styles from './Chart.module.css';
import { Line, Bar } from "react-chartjs-2";

import { useSelector} from 'react-redux';
import { selectData, selectDailyData, selectCountry } from '../covidSlice';

const Chart: React.FC = () => {
    const data = useSelector(selectData)
    const dailyData = useSelector(selectDailyData)
    const country = useSelector(selectCountry)
    return (
        <div>
            
        </div>
    )
}

export default Chart

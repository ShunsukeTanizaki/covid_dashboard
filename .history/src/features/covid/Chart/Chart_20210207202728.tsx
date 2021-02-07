import React from 'react'
import styles from './Chart.module.css';
import { Line, Bar } from "react-chartjs-2";

import { useSelector} from 'react-redux';
import { selectData, selectDailyData, selectCountry } from '../covidSlice';

const Chart: React.FC = () => {
    const data = useSelector(selectData)
    const dailyData = useSelector(selectDailyData)
    const country = useSelector(selectCountry)

    const BarChart = data && (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "people",
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "#008080",
                            "rgba(255, 0, 0, 0.5)"
                        ],
                        data: [
                            data.confirmed.value,
                            data.recovered.value,
                            data.deaths.value
                        ]
                    }
                ]
            }}
            options={{
                legend: { displey: false },
                title: { displey: true, text: `Latest status in ${country}`}
            }}
        />
    )
    
    return (
        <div>
            
        </div>
    )
}

export default Chart

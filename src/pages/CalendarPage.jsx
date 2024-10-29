import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CalendarPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:3001/sheets"; // Use the proxy server URL

            try {
                const response = await axios.get(url);
                setData(response.data.values);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Click <Link to="https://docs.google.com/spreadsheets/d/1wT00jm3Hg0uoMAV4zbdVcwmfmA_RmFcKPRdCmtqPlLY/edit?gid=1875945216#gid=1875945216">here</Link> for GBAC Season 1 24/25 basketball league fixtures & results.</h1>
            <table>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalendarPage;

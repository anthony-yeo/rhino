import React, { useState } from 'react';

const MainPage: React.FC = () => {

    const [data, setData] = useState<string>('');

    const test = async () => {
        try {
            const response = await fetch('http://localhost:3000/');
            const d = await response.json();

            setData(d.message);
        } catch {
            console.error("Error");
        }
     
    }

    return (
        <div>
            <h1>Title</h1>

            <button onClick={test}>Test</button>
            {data && <p>{data}</p>}
        </div>
    )
}

export default MainPage;
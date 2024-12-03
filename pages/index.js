import { useState } from 'react';

const MockupWeatherApp = () => {
    const [city, setCity] = useState('Vancouver');

    return (
        <div style={{ padding: '2rem' }}>
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Weather Forecast App</h1>
                
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        style={{ padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
                    />
                    <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Search</button>
                </form>

                <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>Weather Forecast for {city}</h2>

                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <div style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '1rem', margin: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flexBasis: '20%' }}>
                        <h3>Monday, December 2nd</h3>
                        <p>Temperature: 10°C</p>
                        <p>Condition: Sunny</p>
                    </div>
                    <div style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '1rem', margin: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flexBasis: '20%' }}>
                        <h3>Tuesday, December 3rd</h3>
                        <p>Temperature: 12°C</p>
                        <p>Condition: Cloudy</p>
                    </div>
                    <div style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '1rem', margin: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flexBasis: '20%' }}>
                        <h3>Wednesday, December 4th</h3>
                        <p>Temperature: 8°C</p>
                        <p>Condition: Rainy</p>
                    </div>
                    
                    
                </div>
            </main>
        </div>
    );
};

export default MockupWeatherApp;

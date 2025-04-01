// TemperatureConverter.jsx
import React, { useState } from 'react';
 
const TemperatureConverter = () => {
  const [temp, setTemp] = useState('');
  const [convertedTemp, setConvertedTemp] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
 
  const handleConversion = () => {
    if (isCelsius) {
      setConvertedTemp((temp * 9/5) + 32); // Celsius to Fahrenheit
    } else {
      setConvertedTemp((temp - 32) * 5/9); // Fahrenheit to Celsius
    }
  };
 
  return (
 
    <section className="TemperatureConverter p-3">
      <div className="container">
        <div className="card shadow-sm p-4">
          <h2 className="text-primary text-center fw-semibold mb-4">Temperature Converter</h2>
 
          <input
            type="number"
            className="form-control text-center mb-2"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <div className="mt-2 mb-2">
            <label className="d-block">
              <input
                type="radio"
                checked={isCelsius}
                onChange={() => setIsCelsius(true)}
                className="me-2"
              />              
              Celsius to Fahrenheit
            </label>
            <label className="d-block">
              <input
                type="radio"
                checked={!isCelsius}
                onChange={() => setIsCelsius(false)}
                className="me-2"
              />
              Fahrenheit to Celsius
            </label>
          </div>
          <button className="btn btn-info mt-2" onClick={handleConversion}>Convert</button>
          <h4 className="mt-3 fw-bold">{convertedTemp} {isCelsius ? '°F' : '°C'}</h4>
        </div>
      </div>
    </section>
 
  );
};
 
export default TemperatureConverter;
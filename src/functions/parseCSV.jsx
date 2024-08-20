import React, { useState } from 'react';
import Papa from 'papaparse';

const CsvReader = () => {
  const [data, setData] = useState([]);
  const [searchNumber, setSearchNumber] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  const handleSearch = () => {
    const matchingRow = data.find(row => row.number === searchNumber);
    console.log(matchingRow);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input
        type="text"
        placeholder="Enter number to search"
        value={searchNumber}
        onChange={(e) => setSearchNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CsvReader;



import React, { useState } from 'react';
import Papa from 'papaparse';

const CsvParser = () => {
  const [data, setData] = useState([]);
  const [searchNumber, setSearchNumber] = useState('');
  const [matchingRow, setMatchingRow] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      });
    }
  };

  const handleSearch = () => {
    const row = data.find(row => row.number === searchNumber);
    setMatchingRow(row);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input
        type="text"
        placeholder="Enter number to search"
        value={searchNumber}
        onChange={(e) => setSearchNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {matchingRow && <pre>{JSON.stringify(matchingRow, null, 2)}</pre>}
    </div>
  );
};

export default CsvParser;
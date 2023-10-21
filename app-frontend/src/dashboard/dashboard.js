import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);

  const fetchHistoricalData = async (startDate, endDate) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/historical-data",
        {
          params: {
            startDate,
            endDate,
          },
        }
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchHistoricalData("2023-01-01", "2023-10-21")}>
        Fetch Data
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;

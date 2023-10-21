const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("I'm Alive and I'm listening");
});

const TERRA_API_KEY = "YOUR_TERRA_API_KEYeM2nSkRsJJVQW9ghE_B2-nXhplUT_cFE";

app.post("/webhook", (req, res) => {
  // Handle webhook data from Terra
  console.log("Received data:", req.body);

  res.sendStatus(200);
});

app.get("/historical-data", async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const response = await axios.get("TERRA_ENDPOINT_URL", {
      // Replace with the actual endpoint URL
      headers: {
        Authorization: `Bearer ${TERRA_API_KEY}`,
      },
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching historical data.");
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

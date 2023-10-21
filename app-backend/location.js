// import {
//   searchRegion,
//   RegionSearchValue,
//   SearchRegionRequestData,
//   SearchRegionResponse,
// } from "@googlemaps/region-lookup";

const express = require("express");
const axios = require("axios");

const app = express();
const locationRouter = express.Router();
// Serve the React app (assuming you have built it)
app.use(express.static("build"));

//  Google Maps API key
const googleMapsAPIKey = "AIzaSyDVnnD8F7MzDzO2ZsWCGcvPBdpRQ2FXSXM";

// Create a route to provide the API key
app.get("/getGoogleMapsAPIKey", (req, res) => {
  res.json({ apiKey: googleMapsAPIKey });
});

app.use(express.json());

// Endpoint to reverse geocode and get the county name
app.post("/reverseGeocode", async (req, res) => {
  const { lat, lng } = req.body;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`
    );

    if (response.data.results.length > 0) {
      const countyComponent = response.data.results[0].address_components.find(
        (component) => component.types.includes("administrative_area_level_2")
      );

      if (countyComponent) {
        const countyName = countyComponent.long_name;
        res.json({ countyName });
      } else {
        res.json({ error: "County not found in results." });
      }
    } else {
      res.json({ error: "No results found." });
    }
  } catch (error) {
    console.error("Error during reverse geocoding:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// // Headers
// const headers = {
//   "X-Goog-Api-Key": googleMapsAPIKey,
// };

// const data = {
//   search_values: [
//     {
//       latlng: [position.coords.latitude, position.coords.longitude],
//       place_type: "locality",
//       region_code: "us",
//     },
//   ],
// };
// const response = await regionLookupClient.searchRegion({ headers, data });

module.exports = locationRouter;

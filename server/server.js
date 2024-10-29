const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3001;

app.use(cors());

app.get("/sheets", async (req, res) => {
  const sheetId = "1DOSe9OL-GDkMhaf2bc231TojjjLHDbTTTBoqcL3wIH0";
  const range = "2025Calendar!A1:G67"; // Adjust to your new sheet name and range
  const apiKey = process.env.VITE_GOOGLE_SHEETS_API_KEY;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching data from Google Sheets" });
  }
});
console.log("Google Sheets API Key:", process.env.VITE_GOOGLE_SHEETS_API_KEY);


app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});

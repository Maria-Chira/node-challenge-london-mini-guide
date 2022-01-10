const express = require("express");

const app = express();

const cityHarrow = require("./data/Harrow.json");
const cityStratford = require("./data/Stratford.json");


//responding with the routes we are planning to implement
app.get("/", (req, res) => {
  res.json({
    "/pharmacies": "returns an array of pharmacies in a specific area",
    "/colleges": "returns an array of colleges in a specific area",
    "/doctors": "returns an array of doctors in a specific area",
    "/hospitals": "returns an array of hospitals in a specific area",
  });
});


// /pharmacies route - returns pharmacies list for Stratford
app.get("/pharmacies", (req, res) => {
  res.json(cityStratford.pharmacies);
});

// /colleges route - returns colleges list for Stratford
app.get("/colleges", (req, res) => {
  res.json(cityStratford.colleges);
});

// /doctors route - returns doctors list for Stratford
app.get("/doctors", (req, res) => {
  res.json(cityStratford.doctors);
});

// /hospitals route - returns hospitals list for Stratford
app.get("/hospitals", (req, res) => {
  res.json(cityStratford.hospitals);
});

app.listen(3000);

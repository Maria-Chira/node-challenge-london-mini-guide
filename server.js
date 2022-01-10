const express = require("express");

const app = express();

const cityHarrow = require("./data/Harrow.json");
const cityStratford = require("./data/Stratford.json");
const cityHeathrow = require("./data/Heathrow.json");
const city = {
  harrow: cityHarrow,
  stratford: cityStratford,
  heathrow: cityHeathrow,
};


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


// return data based on any city or any category that is passed to the server.
app.get("/:city/:category", (req, res) => {
  const cityParam = req.params.city.toLowerCase();
  const categoryParam = req.params.category.toLowerCase();

  if (city[cityParam] && city[cityParam][categoryParam]) {
    res.json(city[cityParam][categoryParam]);
  }
  res
    .status(400)
    .json({ msg: `The ${req.params.city} city or the ${req.params.category} category is invalid.` });
})

// return data based on any city that is passed to the server
app.get("/:city/pharmacies", (req, res) => {
  const cityParam = req.params.city.toLowerCase()
  if (city[cityParam]){
    res.json(city[cityParam].pharmacies);
  }
  res.status(400).send(`${req.params.city} is not a valid city`);
})

app.get("/:city/colleges", (req, res) => {
  const cityParam = req.params.city.toLowerCase();
  if (city[cityParam]){
    res.json(city[cityParam].colleges);
  }
  res.status(400).send(`${req.params.city} is not a valid city`);
});

app.get("/:city/doctors", (req, res) => {
  const cityParam = req.params.city.toLowerCase();
  if (city[cityParam]){
    res.json(city[cityParam].doctors);
  }
  res.status(400).send(`${req.params.city} is not a valid city`);
});

app.get("/:city/hospitals", (req, res) => {
  const cityParam = req.params.city.toLowerCase();
  if (city[cityParam]){
  res.json(city[cityParam].hospitals);
  }
  res.status(400).send(`${req.params.city} is not a valid city`);
});







app.listen(3000);

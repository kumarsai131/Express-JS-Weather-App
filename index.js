const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.post("/getweather", (req, res) => {
  // call an external API
  // Axios
  //
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=0ccc044bb13239c59e22c6c4e43a7b99&units=metric`
    )
    .then((response) => {
      console.log(response.data);
      res.render("weather.ejs", {
        city: req.body.city,
        weather: response.data.main.temp,
      });
    });
});

app.listen(8080);

const axios = require("axios");
const program = require("commander");

const apiKey = process.env.WEATHER_API_KEY;

program.version("0.0.1", "-v, --version")

program
  .command("weather <city>")
  .option("-i, --id", "Specify by city ID")
  .action((city) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&APPID=" + apiKey
      )
      .then(response => {
        console.log("City: " + response.data.name);
        console.log("Weather: " + response.data.weather[0].main);
        console.log("Current Temp: " + response.data.main.temp);
        console.log("Max Temp: " + response.data.main.temp_max);
        console.log("Min Temp: " + response.data.main.temp_min);

      })
      .catch(error => {
        console.log(error);
      });
  });

  program.parse(process.argv);

weatherApp.service("cityService", function () {
  this.city = "";
  this.days = 1;
});

weatherApp.service("weatherService", [
  "$resource",
  function ($resource) {
    const weatherAPI = $resource(
      API_PATH,
      { callback: "JSON_CALLBACK" },
      +"&" + { get: { method: "JSONP" } }
    );

    this.getWeather = (city, days) => {
      return weatherAPI.get({ q: city, days: days });
    };
  },
]);

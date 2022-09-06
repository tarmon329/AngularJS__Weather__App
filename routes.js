weatherApp.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "./pages/home.html",
    controller: "homeController",
  });

  $routeProvider.when("/forecast", {
    templateUrl: "./pages/forecast.html",
    controller: "forecastController",
  });

  $routeProvider.when("/forecast/:days", {
    templateUrl: "./pages/forecast.html",
    controller: "forecastController",
  });
});

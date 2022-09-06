weatherApp.controller("homeController", [
  "$scope",
  "$location",
  "cityService",
  function ($scope, $location, cityService) {
    $scope.city = localStorage.getItem("city") || cityService.city;
    $scope.days = +cityService.days;

    $scope.submitHandler = function () {
      $location.path(`/forecast/${$scope.days || 1}`);
    };

    $scope.$watch("city", function (city) {
      cityService.city = city;
      localStorage.setItem("city", city);
    });

    $scope.$watch("days", function (days) {
      cityService.days = days;
    });
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$location",
  "$routeParams",
  "cityService",
  "weatherService",
  function ($scope, $location, $routeParams, cityService, weatherService) {
    $scope.city = localStorage.getItem("city") || cityService.city;
    $scope.days = +$routeParams.days || "";
    $scope.weatherResult = "";
    $scope.weekDays = [1, 2, 3, 4, 5, 6, 7];

    $scope.getWeekDay = function (date) {
      return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date(date)
      );
    };

    $scope.tempCel = function (deg) {
      return new Intl.NumberFormat("metric", {
        style: "unit",
        unit: "celsius",
      }).format(deg);
    };

    $scope.$watch("days", function (days) {
      cityService.days = days;
    });

    if ($scope.city) {
      if ($scope.days <= 0) {
        $scope.days = 1;
        $location.path(`/forecast/${$scope.days}`);
      }
      if ($scope.days > 7) {
        $scope.days = 7;
        $location.path(`/forecast/${$scope.days}`);
      }
      if ($scope.days % 1 != 0) {
        $scope.days = Math.floor($scope.days);
        $location.path(`/forecast/${$scope.days}`);
      }

      $scope.weatherResult = weatherService.getWeather(
        $scope.city,
        $scope.days
      );
    }
  },
]);

weatherApp.directive("weatherPanel", function () {
  return {
    templateUrl: "./directives/weatherPanel.html",
    replace: true,
    scope: {
      day: "=",
      getWeekday: "&",
      tempCel: "&",
    },
  };
});

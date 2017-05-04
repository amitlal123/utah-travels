angular.module('utahTravel')
.controller('locationsCtrl', function(mainSrv) {
  this.locationInfo = mainSrv.travelInfo;
});

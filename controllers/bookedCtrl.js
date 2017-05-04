angular.module('utahTravel')
.controller('bookedCtrl', function($stateParams, mainSrv) {
  var cityId = parseInt($stateParams.id);
  var city = '';
  var data = mainSrv.travelInfo;
  // forEach approach. this inside forEach refers to window.
  //for loop will however be better in this case.

  data.forEach(function(each){
    if(each.id === cityId) {
      city = each.city;
    }
  });
  this.city = city;
});

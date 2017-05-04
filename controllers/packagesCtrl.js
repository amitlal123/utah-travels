angular.module('utahTravel')
.controller('packagesCtrl', function(mainSrv) {
    this.packagesInfo = mainSrv.travelInfo;
    //  $scope.packagesInfo = mainSrv.travelInfo;
});

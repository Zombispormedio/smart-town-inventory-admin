angular.module('Application')
    .controller('SensorGridImportDialogCtrl',function($scope, _import){
    
    $scope.sensor_grids=_import.data;
    $scope.labels=_import.labels;
    

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.confirm = function() {
        $mdDialog.hide();
    };
});
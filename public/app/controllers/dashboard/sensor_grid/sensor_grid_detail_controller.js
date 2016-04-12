angular.module('Application')
    .controller('DetailSensorGridCtrl',function($rootScope, $scope, $stateParams, SensorGridService, RequestService, ThemeService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.dashboard.list");
    }

    var sensor_grid_id=$stateParams.id;

    $scope.SelectedIndex="info";

    this.SensorGridById=function(){
        SensorGridService.Basic().byId({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;
        }), RequestService.Error());
    }

    this.SensorGridById();
});
angular.module('Application')
    .controller('CreateSensorCtrl',function($rootScope, $scope, $stateParams, SensorService, RequestService,  MagnitudeService){

    var sensor_grid;

    if($stateParams.sensor_grid){
        var sensor_grid=$stateParams.sensor_grid;
    }else{
        $rootScope.go("application.dashboard.list");
    }

    $scope.goBack=function(){
        $rootScope.go("application.dashboard.detail", {id:sensor_grid});
    }

    $scope.sensor={
        display_name:""
    }
    
   
    $scope.setMagnitude=function(){
        $scope.sensor.magnitude=$scope.SelectedMagnitude._id;
        delete $scope.sensor.unit;
    }
    
     this.AllMagnitudes=function(){

        MagnitudeService.Basic().all( RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    this.AllMagnitudes();


});
angular.module('Application')
    .controller('CreateSensorCtrl',function($rootScope, $scope, $stateParams, SensorService, RequestService,  MagnitudeService){

    var sensor_grid;

    if($stateParams.sensor_grid){
        var sensor_grid=$stateParams.sensor_grid;
    }else{
        $rootScope.go("application.dashboard.list");
    }

    $scope.goBack=function(){
        $rootScope.go("application.dashboard.detail", {id:sensor_grid, tab:"sensors"});
    }

    $scope.sensor={
        display_name:""
    }
    
   
    $scope.setMagnitude=function(){
        $scope.sensor.magnitude=$scope.SelectedMagnitude._id;
        delete $scope.sensor.unit;
    }
    
     this.AllMagnitudes=function(){

        MagnitudeService.Search().all( RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    this.AllMagnitudes();
    
    $scope.create=function(){
         var sensor=angular.copy($scope.sensor);
     
        if(sensor.display_name==""){
            sensor.display_name=chance.sentence({words: 3}).split(" ").join("").replace(".", "");
        }
        
        sensor.sensor_grid=sensor_grid;


        SensorService.Basic().new(sensor, RequestService.Message($scope.goBack), RequestService.Error())
    }


});
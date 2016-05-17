angular.module('Application')
    .controller('CreateSensorGridCtrl',function($rootScope, $scope, SensorGridService, ZoneService, RequestService){
     $scope.goBack=function(){
        $rootScope.go("application.dashboard.list");
    }

    $scope.sensor_grid={
        display_name:""
    }

    
    $scope.create=function(){
        var sensor_grid=angular.copy($scope.sensor_grid);
     
        if(sensor_grid.display_name==""){
            sensor_grid.display_name=chance.sentence({words: 3}).split(" ").join("").replace(".", "");
        }
        

        SensorGridService.Basic().new(sensor_grid, RequestService.Message($scope.goBack), RequestService.Error())
    }
    
    
    this.ZoneAll=function(){

        ZoneService.Search().all( RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };

    this.ZoneAll();
});
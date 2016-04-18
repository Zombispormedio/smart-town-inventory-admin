angular.module('Application')
    .controller('DetailSensorCtrl',function($rootScope, $scope, $stateParams, SensorService,  RequestService, ThemeService, clipboard, MagnitudeService){
    var self=this;

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    var sensor_id=$stateParams.id;

    $scope.goBack=function(){
        $scope.go("application.dashboard.detail", {id:$scope.sensor.sensor_grid});
    }


    var tabs=["info", "settings"];
    
    $scope.SelectedIndex=tabs.indexOf($stateParams.tab)>-1?$stateParams.tab:"info";

    $scope.select=function(index){
        $rootScope.go("application.sensor.detail", {id:sensor_id, tab:index });
    }

    $scope.copyToClipboard = function (text) {
        clipboard.copyText(text);
    };

    $scope.editable={
        transmissor:false,
        display_name:false,
        magnitude:false
    }

    $scope.changeTransmissor=function(){
        var result=_.pick($scope.sensor, ["device_name", "description"]);

        SensorService.Transmissor().set({id:sensor_id},result, RequestService.Data(function(data){
            $scope.sensor=data;
            $scope.editable.transmissor=false;
        }), RequestService.Error());
    }

    $scope.changeDisplayName=function(){
        var result=_.pick($scope.sensor, ["display_name"]);
        SensorService.DisplayName().set({id:sensor_id},result, RequestService.Data(function(data){
            $scope.sensor=data;
            $scope.editable.display_name=false;
        }), RequestService.Error());
    }

    $scope.onChangeSelectedMagnitude=function(){
               $scope.sensor.unit="";
         self.setSelectedMagnitude();
    }
    this.setSelectedMagnitude=function(){
 
        $scope.SelectedMagnitude=_.find($scope.magnitudes, function(o){
            return o._id===$scope.sensor.magnitude; 
        });
    }

    this.AllMagnitudes=function(){

        MagnitudeService.Basic().all( RequestService.Data(function(data){
            $scope.magnitudes=data;
            self.setSelectedMagnitude();
        }), RequestService.Error());
    };
    
    $scope.changeMagnitude=function(){
        var result=_.pick($scope.sensor, ["magnitude", "unit", "is_raw_data", "raw_conversion"]);
        SensorService.Magnitude().set({id:sensor_id},result, RequestService.Data(function(data){
            $scope.sensor=data;
            $scope.editable.magnitude=false;
            self.setSelectedMagnitude();
        }), RequestService.Error());
    }



    this.SensorGridById=function(){
        SensorService.Basic().byId({id:sensor_id}, RequestService.Data(function(data){
            $scope.sensor=data;
            self.AllMagnitudes();
        }), RequestService.Error());
    }

    this.SensorGridById();
});
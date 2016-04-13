angular.module('Application')
    .controller('DetailSensorGridCtrl',function($rootScope, $scope, $stateParams, SensorGridService, RequestService, ThemeService, clipboard){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.dashboard.list");
    }

    var sensor_grid_id=$stateParams.id;

    $scope.SelectedIndex="info";

    $scope.select=function(index){
        $scope.SelectedIndex=index;
    }

    $scope.editable={
        communication_center:false
    }
    $scope.show={
        secret:"password"
    };
    
    $scope.showSecret=function(){
        $scope.show.secret="text";
    }
    
    
     $scope.reloadSecret=function(){
        SensorGridService.Secret().reload({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;
              $scope.show.secret="password";
        }), RequestService.Error());
    }
        
     
     $scope.changeCommunicationCenter=function(){
          var result=_.pick($scope.sensor_grid, ["device_name", "description"]);

        SensorGridService.CommunicationCenter().set({id:sensor_grid_id},result, RequestService.Data(function(data){
            $scope.sensor_grid=data;
             $scope.editable.communication_center=false;
        }), RequestService.Error());
     }

    $scope.copyToClipboard = function (text) {
        clipboard.copyText(text);
    };

    this.SensorGridById=function(){
        SensorGridService.Basic().byId({id:sensor_grid_id}, RequestService.Data(function(data){
            $scope.sensor_grid=data;
        }), RequestService.Error());
    }

    this.SensorGridById();
});
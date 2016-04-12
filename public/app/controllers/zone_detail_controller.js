angular.module('Application')
    .controller('DetailZoneCtrl',function($rootScope, $scope, $stateParams,  ZoneService, RequestService, ThemeService){


    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.zones.list");
    }


    var zone_id=$stateParams.id;


    $scope.SelectedIndex="location";

    $scope.select=function(index){
        $scope.SelectedIndex=index;
    }


    $scope.editable={
        display_name:false,
        description:false,
        keywords:false
    };

    $scope.changeDisplayName=function(){

        ZoneService.DisplayName().set({id:zone_id},{display_name:$scope.zone.display_name}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.display_name=false;                                                  
        }), RequestService.Error());
    }


    $scope.changeDescription=function(){

        ZoneService.Description().set({id:zone_id},{description:$scope.zone.description}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.description=false;                                                  
        }), RequestService.Error());
    }

    $scope.changeKeywords=function(){

        ZoneService.Keywords().set({id:zone_id},{keywords:$scope.zone.keywords}, RequestService.Data(function(data){
            $scope.zone=data;
            $scope.editable.keywords=false;                                                  
        }), RequestService.Error());
    }


    this.ZoneById=function(){
        ZoneService.Basic().byId({id:zone_id}, RequestService.Data(function(data){
            $scope.zone=data;
        }), RequestService.Error());
    }

    this.ZoneById();


});
angular.module('Application')
    .controller('DetailMagnitudeCtrl',function($rootScope, $scope, $stateParams, MagnitudeService, RequestService, ThemeService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.magnitudes.list");
    }

    var magnitude_id=$stateParams.id;
    $scope.Digital=function(){
        return $scope.magnitude?$scope.magnitude.type==="1":false;
    }

    $scope.SelectedIndex="info";
    $scope.editable={
        name:false,
        type:false
    };


    $scope.select=function(index){
        if((index!=="conversions"&&$scope.magnitude.type!==1)||(index=="conversions"&&$scope.magnitude.type==0))
            $scope.SelectedIndex=index;
    }


    $scope.changeDisplayName=function(){

        MagnitudeService.DisplayName().set({id:magnitude_id},{display_name:$scope.magnitude.display_name}, RequestService.Data(function(data){
            $scope.magnitude=data;
            $scope.editable.name=false;                                                  
        }), RequestService.Error());
    }

    $scope.changeType=function(){
        MagnitudeService.Type().set({id:magnitude_id},{type:$scope.magnitude.type}, RequestService.Data(function(data){
            $scope.magnitude=data;
            $scope.editable.type=false;                                                  
        }), RequestService.Error());
    }

    this.MagnitudeById=function(){
        MagnitudeService.Basic().byId({id:magnitude_id}, RequestService.Data(function(data){
            $scope.magnitude=data;
        }), RequestService.Error());
    }

    this.MagnitudeById();




});
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
        type:false,
        digital_units:false
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


    $scope.changeDigitalUnits=function(){

        MagnitudeService.DigitalUnits().set({id:magnitude_id},{digital_units:$scope.magnitude.digital_units}, RequestService.Data(function(data){
            $scope.magnitude=data;
            $scope.editable.digital_units=false;                                                  
        }), RequestService.Error());
    }


    $scope.addAnalogUnit=function(){
        
        var index=$scope.magnitude.analog_units.length;
        var new_unit={display_name:"Unit"+index};
        MagnitudeService.AnalogUnits().new({id:magnitude_id}, {analog_unit:new_unit}, RequestService.Data(function(data){
            $scope.magnitude=data;  
            
             $scope.magnitude.analog_units[index].editable=true;
        }), RequestService.Error());
    }
    
    
    $scope.updateAnalogUnit=function(unit, index){
         MagnitudeService.AnalogUnits().update({id:magnitude_id}, {analog_unit:unit}, RequestService.Data(function(data){
            $scope.magnitude=data;  
            
             $scope.magnitude.analog_units[index].editable=false;
        }), RequestService.Error());
    }



    this.MagnitudeById=function(){
        MagnitudeService.Basic().byId({id:magnitude_id}, RequestService.Data(function(data){
            $scope.magnitude=data;
        }), RequestService.Error());
    }

    this.MagnitudeById();




});
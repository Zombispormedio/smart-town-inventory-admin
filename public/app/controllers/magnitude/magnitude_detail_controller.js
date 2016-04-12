angular.module('Application')
    .controller('DetailMagnitudeCtrl',function($rootScope, $scope, $stateParams,  $mdDialog, MagnitudeService, RequestService, ThemeService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.goBack=function(){
        $scope.go("application.magnitudes.list");
    }

    var magnitude_id=$stateParams.id;
    
    $scope.SelectedIndex="info";
    
    $scope.Digital=function(){
        return $scope.magnitude?$scope.magnitude.type==="1":false;
    }


    $scope.editable={
        name:false,
        type:false,
        digital_units:false
    };


    $scope.select=function(index){
        if($scope.magnitude.type){
            if((index!=="conversions"&&$scope.magnitude.type!==1)||(index=="conversions"&&$scope.magnitude.type==0)){
                $scope.SelectedIndex=index;

            }
        }
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

    $scope.deleteAnalogUnit=function(unit){
        MagnitudeService.AnalogUnits().delete({id:magnitude_id, analog_id:unit._id}, RequestService.Data(function(data){
            $scope.magnitude=data;  


        }), RequestService.Error());
    }



    var OpenConversionDialog=function(ev, conversion, cb){
        $mdDialog.show({
            controller: function($scope, $mdDialog, conversion, units){
                $scope.conversion=conversion;
                $scope.units=units;

                $scope.errors={
                    unitsEmpty:false,
                    unitsEquals:false,
                    DisplayNameEmpty:false
                }
                $scope.hide = function() {
                    $mdDialog.hide();
                };
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                var checkErrors=function(){
                    Object.keys($scope.errors).forEach(function(a){
                        $scope.errors[a]=false; 
                    });
                    $scope.errors.DisplayNameEmpty=$scope.conversion.display_name==="";
                    $scope.errors.unitsEmpty=(!$scope.conversion.unitA || $scope.conversion.unitA==="") || (!$scope.conversion.unitB || $scope.conversion.unitB==="");
                    $scope.errors.unitsEquals= $scope.conversion.unitA===$scope.conversion.unitB ; 

                    return Object.keys($scope.errors).reduce(function(prev, a){
                        return prev || $scope.errors[a]; 
                    }, false);
                }
                $scope.confirm = function() {

                    if(!checkErrors())
                        $mdDialog.hide($scope.conversion);
                };

            },
            templateUrl: '/views/_application/_magnitudes/conversion.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            locals:{
                conversion: conversion,
                units:$scope.magnitude.analog_units
            }

        })
            .then(cb);
    }



    $scope.addConversion=function(ev){
        var index=$scope.magnitude.conversions.length;
        var new_conversion={display_name:"Conversion"+index};

        OpenConversionDialog(ev, new_conversion, function(conversion){
            MagnitudeService.Conversions().new({id:magnitude_id}, {conversion:conversion}, RequestService.Data(function(data){
                $scope.magnitude=data;  
            }), RequestService.Error());
        });

    }

    $scope.updateConversion=function(ev, to_update){
        OpenConversionDialog(ev, to_update, function(conversion){
            MagnitudeService.Conversions().update({id:magnitude_id}, {conversion:conversion}, RequestService.Data(function(data){
                $scope.magnitude=data;  
            }), RequestService.Error());
        });

    }

    $scope.deleteConversion=function(conversion){
        MagnitudeService.Conversions().delete({id:magnitude_id, conversion_id:conversion._id}, RequestService.Data(function(data){
            $scope.magnitude=data;  
        }), RequestService.Error());
    }


    $scope.getUnitName=function(id){
        return _.find($scope.magnitude.analog_units, function(o){return o._id===id}).display_name;
    }




    this.MagnitudeById=function(){
        MagnitudeService.Basic().byId({id:magnitude_id}, RequestService.Data(function(data){
            $scope.magnitude=data;
        }), RequestService.Error());
    }

    this.MagnitudeById();




});
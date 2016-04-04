angular.module('Application')
    .controller('DetailMagnitudeCtrl',function($rootScope, $scope, $stateParams, MagnitudeService, RequestService){
    
    $scope.goBack=function(){
        $rootScope.go("application.magnitudes.list");
    }
   
    var magnitude_id=$stateParams.id;
    
    
    this.MagnitudeById=function(){
        MagnitudeService.Basic().byId({id:magnitude_id}, RequestService.Data(function(data){
            $scope.magnitude=data;
        }), RequestService.Error())
    }
    
    this.MagnitudeById();
    
    

   
});
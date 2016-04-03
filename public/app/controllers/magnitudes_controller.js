angular.module('Application')
    .controller('MagnitudesCtrl',function($scope, $rootScope, MagnitudeService, RequestService){
    $scope.create=function(){
        $rootScope.go("application.magnitudes.create")
    };
    var types=["ANALOG", "DIGITAL"]
    
    var icons=["record", "adjust"];
    
    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    }
    
    $scope.Type=function(index){
        return types[index];
    }
    
    this.All=function(){
        MagnitudeService.Basic().all(RequestService.Seq(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };
    
    this.All();
});
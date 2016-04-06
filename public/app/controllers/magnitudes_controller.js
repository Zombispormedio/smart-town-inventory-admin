angular.module('Application')
    .controller('MagnitudesCtrl',function($scope, $rootScope, MagnitudeService, RequestService, ThemeService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    

    $scope.create=function(){
        $rootScope.go("application.magnitudes.create")
    };
    var types=["ANALOG", "DIGITAL"]

    var icons=["record", "adjust"];
    
    $scope.searchObject={
        text:""
    };

    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    };

    $scope.Type=function(index){
        return types[index];
    };

    $scope.delete=function(id){
        MagnitudeService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    $scope.goToDetail=function(id){
        $scope.go("application.magnitudes.detail", {id:id});
    }

    this.All=function(){

        MagnitudeService.Basic().all( RequestService.Data(function(data){
            $scope.magnitudes=data;
        }), RequestService.Error());
    };

    this.All();
});
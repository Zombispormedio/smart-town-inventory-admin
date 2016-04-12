angular.module('Application')
    .controller('ZonesCtrl',function($scope, $rootScope,ThemeService, ZoneService, RequestService){
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }

    $scope.searchObject={
        text:""
    };

    var icons={
        rectangle:"apple-finder",
        circle:"arrow-down-bold-circle-outline",
        polygon:"arrow-down-bold-hexagon-outline"
    };


    $scope.Icon=function(index){
        return "mdi-"+icons[index];
    };

    $scope.goToDetail=function(id){
        $scope.go("application.zones.detail", {id:id});
    }


    $scope.create=function(){
        $rootScope.go("application.zones.create")
    };

    $scope.delete=function(id){
        ZoneService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };




    this.All=function(){

        ZoneService.Basic().all( RequestService.Data(function(data){
            $scope.zones=data;
        }), RequestService.Error());
    };

    this.All();
});
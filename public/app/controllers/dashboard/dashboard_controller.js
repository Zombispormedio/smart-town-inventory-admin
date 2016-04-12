angular.module('Application')
    .controller('DashboardCtrl',function($scope, $rootScope, SensorGridService, ThemeService,  RequestService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }


    $scope.create=function(){
        $rootScope.go("application.dashboard.create")
    };
    
    

    $scope.searchObject={
        text:""
    };

    var icons=["carrot", "apple-safari", "barley", "black-mesa", "bone", "bug", "food-fork-drink"];    
    $scope.Icon=function(name){
        
        var index=name.charCodeAt(0)%icons.length;
        return "mdi-"+icons[index];
    };
    $scope.delete=function(id){
       SensorGridService.Basic().del({id:id},RequestService.Data(function(data){
            $scope.sensor_grids=data;
        }), RequestService.Error());
    };

    $scope.goToDetail=function(id){
        $scope.go("application.dashboard.detail", {id:id});
    }

    this.All=function(){

        SensorGridService.Basic().all( RequestService.Data(function(data){
            $scope.sensor_grids=data;
        }), RequestService.Error());
    };

    this.All();

});
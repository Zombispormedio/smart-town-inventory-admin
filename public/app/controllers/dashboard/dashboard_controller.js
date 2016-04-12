angular.module('Application')
    .controller('DashboardCtrl',function($scope, $rootScope, ThemeService){
    
    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    

    $scope.create=function(){
        $rootScope.go("application.dashboard.create")
    };
    
});
angular.module('Application')
    .controller('DetailSensorCtrl',function($rootScope, $scope, $stateParams, SensorService,  RequestService, ThemeService){

    ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    
});
angular.module('Application')
    .controller('TasksCtrl',function($scope, $rootScope, TaskService, ThemeService,  RequestService){
     ThemeService.Content($scope, "background-theme-orange");

    $scope.go=function(state, params){
        $rootScope.goWithDestroy($scope, state, params);
    }
    $scope.searchObject={
        text:""
    };
    
    $scope.create=function(){
        
    }

});
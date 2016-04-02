angular.module('Application')
    .controller('MagnitudesCtrl',function($scope, $rootScope){
    $scope.create=function(){
        $rootScope.go("application.magnitudes.create")
    }
});